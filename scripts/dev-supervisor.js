import { spawn, execSync } from "node:child_process";
import fs from "node:fs";

const BRANCH = process.env.PREVIEW_BRANCH || "main";
const REPO_URL = process.env.REPO_URL;
const nextDevRaw = process.env.NEXT_DEV;

function parseBoolean(value, defaultValue) {
  if (value === undefined) return defaultValue;
  return !["false", "0", "no", "off"].includes(String(value).toLowerCase());
}

const NEXT_DEV = parseBoolean(nextDevRaw, true);

function run(name, cmd, args, envOverrides = {}) {
  const p = spawn(cmd, args, {
    stdio: "inherit",
    shell: false,
    env: { ...process.env, ...envOverrides },
  });

  p.on("exit", (code) => {
    console.error(`[supervisor] ${name} exited with code ${code}`);
    process.exit(code ?? 1);
  });

  return p;
}

console.log("[supervisor] ensuring git repo");

if (!fs.existsSync(".git")) {
  if (!REPO_URL) {
    console.error("[supervisor] REPO_URL missing");
    process.exit(1);
  }

  try {
    execSync("git init", { stdio: "inherit" });
    execSync(`git remote add origin ${REPO_URL}`, { stdio: "inherit" });
    execSync("git fetch origin --depth=1", { stdio: "inherit" });
    execSync(`git reset --hard origin/${BRANCH}`, { stdio: "inherit" });
    execSync("git clean -fd", { stdio: "inherit" });
  } catch {
    console.error(
      "[supervisor] git bootstrap failed (likely auth). Continuing with existing workspace."
    );
  }
}

if (NEXT_DEV) {
  console.log("[supervisor] starting Next.js dev server (turbo)");
  run("next-dev", "npm", ["run", "dev"], { NODE_ENV: "development" });
} else {
  console.log("[supervisor] starting Next.js production server");
  run("next-start", "npm", ["run", "start"]);
}

console.log("[supervisor] starting git poller");
run("git-poll", "node", ["scripts/git-poll.js"]);
