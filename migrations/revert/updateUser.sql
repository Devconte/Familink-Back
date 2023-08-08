-- Revert FamiLink:updateUser from pg

BEGIN;

ALTER TABLE "user" DROP "refresh_token";

COMMIT;
