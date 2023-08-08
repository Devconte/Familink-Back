-- Revert FamiLink:get_list_with_task from pg

BEGIN;

DROP FUNCTION getAll_list_tasks;

COMMIT;
