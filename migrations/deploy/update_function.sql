-- SQLBook: Code
-- Deploy FamiLink:update_function to pg

BEGIN;

-- update user 
CREATE FUNCTION update_user(data JSON) RETURNS "user" AS $$
UPDATE "user" SET 
"email" = data ->> 'email',
"password" = data ->> 'password',
"first_name" = data ->> 'first_name',
"last_name" = data ->> 'last_name',
"pseudo" = data ->> 'pseudo',
"role_id" = (data ->> 'role_id')::int,
"family_id" = (data ->> 'family_id')::int,
"updated_at" = now() 
WHERE "id" = (data ->> 'id')::int

RETURNING *
$$
LANGUAGE SQL;

-- update Pictures 

CREATE FUNCTION update_picture(data JSON) RETURNS "picture" AS $$
UPDATE "picture" SET 

"title" = data ->> 'title',
"url" = data ->> 'url',
"user_id" = (data ->> 'user_id')::int,
"updated_at" = now() 
WHERE "id" = (data ->> 'id')::int
RETURNING *
$$
LANGUAGE SQL;

-- Update family name 
CREATE FUNCTION update_family(data JSON) RETURNS "family"
AS $$
  UPDATE "family"
    SET "name" = data ->>'name',
    "updated_at" = now() 
    WHERE "id" = (data->>'id')::int

  RETURNING *
  $$ LANGUAGE SQL;


-- update event 

CREATE FUNCTION update_event(data JSON) RETURNS "event" AS $$
  UPDATE "event" SET  

    "name" = data ->> 'name',
    "date" = (data ->> 'date')::DATE,
    "starting_time" = (data ->> 'starting_time')::TIME,
    "ending_time" = (data ->> 'ending_time')::TIME,
    "updated_at" = now()
  WHERE "id" = (data ->> 'id')::int

RETURNING *

$$
LANGUAGE SQL ;

--Update List 

CREATE FUNCTION update_list(data JSON) RETURNS "list"
AS $$
  UPDATE "list"
    SET 
    "title" = data ->> 'title',
    "category_id" = (data ->>'category_id')::int,
    "updated_at" = now() 
    WHERE "id" = (data ->> 'id')::int 
  RETURNING *
  $$ LANGUAGE SQL;

-- update task

CREATE FUNCTION update_task(data JSON) RETURNS "task"
AS $$
  UPDATE "task"
    SET
    "title" = data ->> 'title',
    "content" = data ->> 'content',
    "state" = (data ->> 'state')::BOOLEAN,
    "user_id" = (data ->> 'user_id')::int,
    "updated_at" = now() 
    WHERE "id" = (data ->> 'id')::int 
RETURNING *
$$ LANGUAGE SQL;

-- update message

CREATE FUNCTION update_message(data JSON) RETURNS "message"
AS $$
  UPDATE "message"
    SET
    "content" = data ->> 'content',
    "user_id" = (data ->> 'user_id')::int,
    "updated_at" = now()
    WHERE "id" = (data ->> 'id')::int 
  RETURNING *
  $$ LANGUAGE SQL;
  
-- update comment 

CREATE FUNCTION update_comment(data JSON) RETURNS "comment"
AS $$
  UPDATE "comment"
    SET
    "content" = data ->> 'content',
    "picture_id" = (data ->> 'picture_id')::int,
    "user_id" = (data ->> 'user_id')::int,
    "updated_at" = now()
    WHERE "id" = (data ->> 'id')::int 
  RETURNING *
  $$ LANGUAGE SQL;
    

COMMIT;