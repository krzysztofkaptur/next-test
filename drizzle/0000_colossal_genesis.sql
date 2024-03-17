CREATE TABLE IF NOT EXISTS "todos" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar(40) NOT NULL,
	"completed" boolean DEFAULT false NOT NULL
);
