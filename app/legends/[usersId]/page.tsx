
import { getUserById } from "@/db/queries";
import { notFound } from "next/navigation";
import UsersProfile from "../usersProfile";

export const dynamic = "force-dynamic"; // Force dynamic rendering for this page

interface Props {
  params: {
    usersId: string;
  };
}

const Page = async({ params }: Props) =>  {
 
  const usersId = parseInt(params.usersId, 10);

  if (isNaN(usersId)) {
    notFound();
  }

  const usersTables = await getUserById(usersId);

  return (
    <div className=" min-h-screen flex items-center justify-center">
      <div className="bg-white/90 rounded-2xl shadow-2xl p-6 sm:p-10 md:p-16 lg:p-20 max-w-3xl w-full mx-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-blue-700 mb-8 sm:mb-10 text-center drop-shadow">
          Welcome to {usersTables.name}'s page!
        </h1>
        <UsersProfile 
          usersTables={[
            {
              id: usersTables.id.toString(),
              name: usersTables.name,
              profile: usersTables.profile.map((item) => ({
                id: item.id ?? 0,
                profile: item.profile ?? "",
              })),
            }
          ]}
        />
      </div>
    </div>
  );
};
export default Page;