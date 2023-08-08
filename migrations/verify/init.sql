-- Verify FamiLink:init on pg

BEGIN;

SELECT id FROM "user" WHERE false;

SELECT id FROM "family" WHERE false;

SELECT id FROM "category" WHERE false;

SELECT id FROM "list" WHERE false;

SELECT id FROM "task" WHERE false;

SELECT id FROM "picture" WHERE false;

SELECT id FROM "comment" WHERE false;

SELECT id FROM "message" WHERE false;

SELECT id FROM "event" WHERE false;

ROLLBACK;