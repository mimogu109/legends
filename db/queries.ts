import { eq } from "drizzle-orm";
import db from "./drizzle"
import { users, usersProfile } from "./schema"

export const getNames = async () => {
   return await db.select().from(users); 
}


export const getUserById = async (userId: number) => {
    const user = await db
        .select({
            id: users.id,
            name: users.name,
            profile: usersProfile,
        })
        .from(users)
        .where(eq(users.id, userId))
        .leftJoin(usersProfile, eq(users.id, usersProfile.usersId));

        if (!user || user.length === 0) {
            throw new Error(`User with ID ${userId} not found`);
        }

        return {
            id: user[0].id,
            name: user[0].name,
            profile: user.map((u) => ({
                id: u.profile ? u.profile.id : null,
                profile: u.profile ? u.profile.profile : null,
            })).filter((p) => p.profile !== null),    
        }
    }