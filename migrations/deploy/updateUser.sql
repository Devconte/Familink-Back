-- Deploy FamiLink:updateUser to pg

BEGIN;

ALTER TABLE "user" ADD "refresh_token" TEXT; 

--
COMMIT;
