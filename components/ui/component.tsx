import Link from "next/link";

interface UsersTable {
  name: string;
  usersId: number;
}

interface usersTableListProps {
  usersTables: UsersTable[];
}

export default function UsersTableList({ usersTables }: usersTableListProps) {
  return (
    <ul className="flex flex-col gap-8 sm:gap-12 items-center">
      {usersTables.map((usersTable) => (
        <li key={usersTable.name}>
          <Link
            href={`/legends/${usersTable.usersId}`}
            className="px-8 sm:px-12 py-3 sm:py-4 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow transition-all duration-200 border-2 border-blue-800 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-800 text-base sm:text-lg tracking-wide w-full text-center"
          >
            {usersTable.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}