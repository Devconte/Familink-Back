-- Revert FamiLink:init from pg

BEGIN;

DROP TABLE IF EXISTS "family", "role", "user" , "category", "list", "task" , "picture" , "comment" , "message" , "event";
DROP DOMAIN if EXISTS EMAIL;
COMMIT;
