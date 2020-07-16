BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "usuarios" (
	"id"	INTEGER NOT NULL,
	"nombre"	TEXT NOT NULL,
	"correo"	TEXT NOT NULL,
	PRIMARY KEY("id" AUTOINCREMENT)
);
INSERT INTO "usuarios" VALUES (1,'Javier','JavierAlmarza@gmail.com');
INSERT INTO "usuarios" VALUES (2,'Manolo','qxuxamanolo@gmail.com');
INSERT INTO "usuarios" VALUES (3,'Jack','Jack@gmail.com');
INSERT INTO "usuarios" VALUES (6,'vicho','vichin@gmail.com');
COMMIT;
