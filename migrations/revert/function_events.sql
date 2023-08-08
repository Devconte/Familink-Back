-- Revert FamiLink:function_events from pg

BEGIN;

DROP FUNCTION getall_events;


COMMIT;
