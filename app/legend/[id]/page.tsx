import UsersProfile from "@/components/ui/usersProfile";
import { getUserById } from "@/db/queries";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function Legend({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id: idString } = await params;
  const id = parseInt(idString, 10);

  if (isNaN(id)) {
    notFound();
  }

  const usersTables = await getUserById(id);

  if (!usersTables) {
    notFound();
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white/90 rounded-2xl shadow-2xl p-6 sm:p-10 md:p-16 lg:p-20 max-w-3xl w-full mx-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-blue-700 mb-8 sm:mb-10 text-center drop-shadow">
          Welcome to {usersTables.name}s page!
        </h1>
        <UsersProfile
          usersTables={[
            {
              id: usersTables.id.toString(),
              name: usersTables.name,
              profile:
                usersTables.profile?.map((item) => ({
                  id: item.id ?? 0,
                  profile: item.profile ?? "",
                })) ?? [],
            },
          ]}
        />
      </div>
    </div>
  );
}
