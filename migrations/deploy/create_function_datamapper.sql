-- SQLBook: Code
-- Deploy FamiLink:create_function_datamapper to pg

BEGIN;

CREATE FUNCTION create_user(data JSON) RETURNS TABLE (id INT, first_name TEXT, last_name TEXT, pseudo TEXT, email TEXT, family_id INT, role_id INT)
AS $$ 
	INSERT INTO
	    "user" (
	        "email",
	        "first_name",
	        "last_name",
	        "pseudo",
	        "password",
	        "family_id",
	        "role_id"
	    )
	VALUES (
	        data ->> 'email',
	        data ->> 'first_name',
	        data ->> 'last_name',
	        data ->> 'pseudo',
	        data ->> 'password',
	        (data ->> 'family_id')::int,
	        (data ->> 'role_id')::int
	    )
	RETURNING id, first_name, last_name, pseudo, email, family_id, role_id;
	$$ LANGUAGE 
SQL STRICT;

CREATE FUNCTION create_family(DATA JSON) RETURNS "family" 
AS $$ 
	INSERT INTO
	    "family" (
	        "name"
	    )
	VALUES (
	        data ->> 'name'
	    )
	RETURNING *;
	$$ LANGUAGE 
SQL STRICT; 


CREATE FUNCTION create_list(data JSON) RETURNS TABLE (list_id INT, list_title TEXT, user_id INT, category_id INT) 
AS $$ 
    INSERT INTO
        "list" (
            "title",
            "user_id",
            "category_id"
        )
    VALUES (
            data ->> 'title',
            (data ->> 'user_id')::int,
            (data ->> 'category_id')::int
        )
    RETURNING id AS list_id, title AS list_title, user_id, category_id;
    $$ LANGUAGE 
SQL STRICT;


CREATE FUNCTION create_task(data JSON) RETURNS TABLE (task_id INT, task_title TEXT, task_content TEXT, task_state BOOLEAN, user_id INT, list_id INT)
AS $$ 
	INSERT INTO
	    "task" (
	        "title",
	        "content",
	        "state",
	        "user_id",
	        "list_id"
	    )
	VALUES (
	        data ->> 'title',
	        data ->> 'content',
	        (data ->> 'state')::BOOLEAN,
	        (data ->> 'user_id')::int,
	        (data ->> 'list_id')::int
	    )
	RETURNING id AS task_id, title as task_title , content AS task_content, state AS task_state, user_id , list_id 
	$$ LANGUAGE 
SQL STRICT; 

CREATE FUNCTION create_message(data JSON) RETURNS TABLE (message_id INT,  message_content TEXT, user_id INT)
AS $$ 
	INSERT INTO
	    "message" (
	        "content",
	        "user_id"
	    )
	VALUES (
	        data ->> 'content',
	        (data ->> 'user_id')::int
          	    )
	RETURNING id AS message_id, content AS message_content, user_id;
	$$ LANGUAGE 
SQL STRICT; 

CREATE FUNCTION create_picture(data JSON) RETURNS TABLE (picture_id INT, picture_title TEXT, picture_url TEXT, user_id INT) 
AS $$ 
	INSERT INTO
	    "picture" (
	        "title",
	        "url",
	        "user_id"
	    )
	VALUES (
	        data ->> 'title',
	        data ->> 'url',
	        (data ->> 'user_id')::int
	    )
	RETURNING id AS picture_id, title AS picture_title, url AS picture_url, user_id;
	$$ LANGUAGE 
SQL STRICT;

CREATE FUNCTION create_comment(data JSON) RETURNS TABLE (comment_id INT, comment_content TEXT, picture_id INT, user_id INT)
AS $$ 
	INSERT INTO
	    "comment" (
	        "content",
	        "picture_id",
	        "user_id"
	    )
	VALUES (
	        data ->> 'content',
	        (data ->> 'picture_id')::int,
	        (data ->> 'user_id')::int
	    )
	RETURNING id AS comment_id, content AS comment_content, picture_id, user_id;
	$$ LANGUAGE 
SQL STRICT;

CREATE FUNCTION create_event (data JSON) RETURNS TABLE (event_id INT, event_name TEXT, event_date DATE, event_starting_time TIME, event_ending_time TIME, user_id INT) 
AS $$ 
	INSERT INTO
	    "event" (
	        "name",
          "date",
          "starting_time",
          "ending_time",
	        "user_id"
	    )
	VALUES (
	        data ->> 'name',
          (data ->> 'date')::date,
          (data ->> 'starting_time')::time,
          (data ->> 'ending_time')::time,
          (data ->> 'user_id')::int
	    )
	RETURNING id AS event_id, name AS event_name, date AS event_date, starting_time AS event_starting_time , ending_time AS event_ending_time, user_id;
	$$ LANGUAGE 
SQL STRICT;

COMMIT;