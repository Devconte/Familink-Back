-- Revert FamiLink:function_picture from pg

BEGIN;

DROP FUNCTION getAll_pictures_with_comments;

COMMIT;
