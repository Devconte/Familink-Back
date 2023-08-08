-- Revert FamiLink:user_email_verification from pg

BEGIN;

ALTER TABLE "user" DROP COLUMN "verified_email";
DROP FUNCTION update_user;


COMMIT;
