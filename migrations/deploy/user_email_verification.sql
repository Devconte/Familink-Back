-- Deploy FamiLink:user_email_verification to pg

BEGIN;

ALTER TABLE "user" ADD "verified_email" BOOLEAN DEFAULT false;

DROP FUNCTION update_user;

CREATE FUNCTION update_user(data JSON) RETURNS "user" AS $$
UPDATE "user" SET 
"email" = data ->> 'email',
"password" = data ->> 'password',
"first_name" = data ->> 'first_name',
"last_name" = data ->> 'last_name',
"pseudo" = data ->> 'pseudo',
"role_id" = (data ->> 'role_id')::int,
"family_id" = (data ->> 'family_id')::int,
"verified_email" = (data ->> 'verified_email')::boolean,
"updated_at" = now() 
WHERE "id" = (data ->> 'id')::int

RETURNING *
$$
LANGUAGE SQL;

COMMIT;
