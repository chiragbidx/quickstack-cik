-- Migration SQL for creating contacts table

CREATE TABLE "contacts" (
    "id" uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    "team_id" uuid NOT NULL REFERENCES "teams"("id") ON DELETE CASCADE,
    "first_name" text NOT NULL,
    "last_name" text NOT NULL,
    "email" text NOT NULL,
    "phone" text,
    "company" text,
    "created_at" timestamp NOT NULL DEFAULT now()
);