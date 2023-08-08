-- Deploy FamiLink:function_message to pg

BEGIN;


CREATE FUNCTION getall_messages(p_family_id INTEGER)
RETURNS TABLE (
  message_id INTEGER,
  message_content TEXT,
  last_name TEXT,
  first_name TEXT,
  pseudo TEXT,
  created_at timestamp,
  updated_at timestamp
) 
AS $$
  SELECT 
    "message".id AS message_id,
    "message".content AS message_content,
    "user".last_name AS last_name,
    "user".first_name AS first_name,
    "user".pseudo AS pseudo,
    "message".created_at AS created_at,
    "message".updated_at AS updated_at
  FROM "message" 
  JOIN "user" ON "user"."id" = "message"."user_id"
  JOIN "family" ON "family"."id" = "user"."family_id"
  WHERE "family"."id" = $1
  GROUP BY 
    "message".id,
    "message".content,
    "user".last_name,
    "user".first_name,
    "user".pseudo;

$$ LANGUAGE SQL;


COMMIT;
