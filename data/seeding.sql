-- Remplissage (seeding) de la base de données

BEGIN;
-- ajout des roles 

INSERT INTO "role" ("name")
VALUES ('parent'), ('child');

-- Ajout des familles

INSERT INTO "family" ("name")
VALUES ('Famille Demo');

-- Ajout des catégories

INSERT INTO
    "category" ("name", "color")
VALUES ('Vacances', 'Blue'), ('A faire', 'Green'), ('Courses', 'Red'), ('Bricolage', 'Red');


COMMIT;