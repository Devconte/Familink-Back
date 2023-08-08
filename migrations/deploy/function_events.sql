-- Deploy FamiLink:function_events to pg

BEGIN;


CREATE FUNCTION getall_events(p_family_id INTEGER)
RETURNS SETOF "event" AS $$
  SELECT "event".*
  FROM "event" 
  JOIN "user" ON "user"."id" = "event"."user_id"
  JOIN "family" ON "family"."id" = "user"."family_id"
  WHERE "family"."id" = p_family_id;
$$ LANGUAGE SQL;


COMMIT;
