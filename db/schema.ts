import { relations } from "drizzle-orm";
import { integer, pgTable, varchar, serial, text } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: integer().primaryKey(),
  name: varchar({ length: 255 }).notNull(),
  age: integer().notNull(),
  email: varchar({ length: 255 }).notNull(),
});

export const usersProfile = pgTable("users_profile", {
  id: serial("id").primaryKey(),
  usersId: integer("users_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  profile: text("profile").notNull(),
});

export const usersRelations = relations(users, ({ many }) => ({
  usersProfile: many(usersProfile),
}));

export const usersProfileRelations = relations(usersProfile, ({ one }) => ({
  users: one(users, {
    fields: [usersProfile.usersId],
    references: [users.id],
  }),
}));
