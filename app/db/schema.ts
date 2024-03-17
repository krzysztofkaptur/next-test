import { pgTable, serial, varchar, boolean } from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm/node-postgres";
import { Client } from "pg";

export const todos = pgTable('todos', {
  id: serial('id').primaryKey(),
  title: varchar('title', { length: 40 }).notNull(),
  completed: boolean('completed').default(false).notNull()
});

const client = new Client({
  connectionString: process.env.DB_URL
});

async function sth() {
  await client.connect();
}
sth()

const db = drizzle(client);
