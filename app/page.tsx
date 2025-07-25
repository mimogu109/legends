
import UsersTableList from "@/components/ui/component";
import { getNames } from "@/db/queries";




export default async function Home() {

  const namesRaw = await getNames();
  const names: { name: string; usersId: number }[] = namesRaw.map(({ id, name }) => ({
    name,
    usersId: id,
  }));
  return (
    <div
      className="bg-gradient-to-br from-blue-400 via-blue-500 to-blue-700 min-h-screen flex items-center justify-center"
      style={{ fontFamily: "Bahnschrift, Arial, sans-serif" }}
    >
      <div className="bg-white/90 rounded-2xl shadow-2xl p-6 sm:p-10 md:p-16 lg:p-20 max-w-3xl w-full mx-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-blue-700 mb-8 sm:mb-10 text-center drop-shadow">
          Welcome to the Home page!
        </h1>
        <div className="mb-6 sm:mb-8">
          <p className="text-base sm:text-lg text-gray-700 text-center mb-8 sm:mb-10">
            Dive into the lives of these legends:
          </p>
        <UsersTableList usersTables={names} /> 
        </div>
      </div>
    </div>
  );
}