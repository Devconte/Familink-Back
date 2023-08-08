-- Deploy FamiLink:get_list_with_task to pg

BEGIN;

CREATE FUNCTION getAll_list_tasks(integer)
  RETURNS TABLE (
    list_id INTEGER,
    list_title text,
    category_id INTEGER,
    list_user_id INTEGER,
    created_at TIMESTAMPTZ,
    updated_at TIMESTAMPTZ,
    task JSON
) AS $$
  SELECT
              "list"."id" as "list_id",
              "list"."title" as "list_title",
              "list"."category_id" as "category_id",
              "list"."user_id" as "list_user_id",
              "list"."created_at",
              "list"."updated_at",
             CASE
                WHEN COUNT("task"."id") > 0 THEN JSON_AGG(
                    JSON_BUILD_OBJECT(
                        'task_id',
                        "task"."id",
                        'task_title',
                        "task"."title",
                        'task_content',
                        "task"."content",
                        'task_state',
                        "task"."state",
                        'task_user_id',
                        "task"."user_id"
                    )
                )
                ELSE NULL
            END AS "task"
          FROM
              "list"
          LEFT JOIN
              "user" ON "user"."id" = "list"."user_id"
          LEFT JOIN
              "task" ON "list"."id" = "task"."list_id"
         JOIN
              "family" ON "family"."id" = "user"."family_id"
          WHERE
              "family"."id" = $1
          GROUP BY
              "list"."id",
              "list"."title";
$$ LANGUAGE SQL;


COMMIT;
