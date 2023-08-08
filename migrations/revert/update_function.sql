-- SQLBook: Code
-- Revert FamiLink:update_function from pg

BEGIN;

DROP FUNCTION IF EXISTS
    update_user,
    update_comment,
    update_event,
    update_family,
    update_list,
    update_message,
    update_task,
    update_picture;

COMMIT;
