-- Deploy FamiLink:function_get_all_family to pg

BEGIN;

CREATE FUNCTION getalldata_from_family(personnal_family_id INTEGER)
RETURNS TABLE (
    "id" INTEGER,
    "name" TEXT,
    "family_members" json,
    "list_with_tasks" json,
    "messages" json,
    "pictures" json,
    "events" json
)
AS $$ 
SELECT
    "family"."id",
    "family"."name",
    (SELECT json_agg(DISTINCT jsonb_build_object(
               'id',
            "user"."id",
            'first_name',
            "user"."first_name",
            'last_name',
            "user"."last_name",
            'pseudo',
            "user"."pseudo",
            'role',
                "role"."name"
    
    )) AS "family_members" 
     FROM "user"
     JOIN "role" ON "role"."id" = "user"."role_id"
     WHERE "user"."family_id" = "family"."id"
    ), 
    (SELECT json_agg(list_subquery) FROM (SELECT * FROM getall_list_tasks($1)) AS list_subquery) AS list_with_tasks,
    (SELECT json_agg(message_subquery) FROM (SELECT * FROM getall_messages($1)) AS message_subquery) AS messages,
    (SELECT json_agg(pictures_subquery) FROM (SELECT * FROM getall_pictures_with_comments($1)) AS pictures_subquery)  AS pictures,
    (SELECT json_agg(event_subquery)FROM (SELECT * FROM getall_events($1)) AS event_subquery) AS events
    
FROM
    "family"
    WHERE "family"."id" = $1
GROUP BY
    "family"."id",
    "family"."name";
$$ LANGUAGE SQL;


COMMIT;
