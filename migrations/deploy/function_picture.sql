-- Deploy FamiLink:function_picture to pg

BEGIN;

CREATE FUNCTION getall_pictures_with_comments(family_id integer)
RETURNS TABLE (
    picture_id integer,
    picture_title text,
    picture_url text,
    last_name text,
    first_name text,
    pseudo text,
    created_at timestamp,
    updated_at timestamp,
    comments json
) AS $$
    SELECT
        picture.id AS picture_id,
        picture.title AS picture_title,
        picture.url AS picture_url,
        "user"."last_name" AS last_name,
        "user"."first_name" AS first_name,
        "user"."pseudo" AS pseudo,
        picture.created_at,
        picture.updated_at,

    CASE WHEN COUNT("comment"."id") > 0 THEN    
        JSON_AGG(
            JSON_BUILD_OBJECT(
                'comment_id', comment.id,
                'comment_content', comment.content,
                  'first_name', "user"."first_name",
                'last_name', "user"."last_name",
                'pseudo', "user"."pseudo"
            )
        ) 
       ELSE NULL 
     END   
        AS "comments"
    FROM
        "picture"
    LEFT JOIN comment ON picture.id = comment.picture_id
    LEFT JOIN "user" ON "user"."id" = "picture"."user_id"
	JOIN family ON "family"."id" = "user"."family_id"
    WHERE
        "family"."id"= $1
    GROUP BY
        picture.id,
        picture.title,
        "user"."last_name",  
        "user"."first_name",  
        "user"."pseudo";  
$$ LANGUAGE SQL;
COMMIT;
