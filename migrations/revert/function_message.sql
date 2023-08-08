-- Revert FamiLink:function_message from pg

BEGIN;

DROP FUNCTION getall_messages;

COMMIT;
