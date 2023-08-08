-- SQLBook: Code
-- Revert FamiLink:create_function_datamapper from pg

BEGIN;

DROP FUNCTION create_user, create_comment, create_event, create_family, create_list, create_message, create_task, create_picture;

COMMIT;
