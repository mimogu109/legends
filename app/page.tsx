'use client';
import Link from "next/link";

export default function Home() {
  return (
    <div
      className="bg-gradient-to-br from-blue-400 via-blue-500 to-blue-700 min-h-screen flex items-center justify-center"
      style={{ fontFamily: "Bahnschrift, Arial, sans-serif" }}
    >
      <div className="bg-white/90 rounded-2xl shadow-2xl p-20 max-w-3xl w-full">
        <h1 className="text-4xl font-bold text-blue-700 mb-10 text-center drop-shadow">
          Welcome to the Home page!
        </h1>
        <div className="mb-8">
          <p className="text-lg text-gray-700 text-center mb-10">
            Dive into the lives of these legends:
          </p>
          <ul className="flex flex-col gap-12 items-center">
            <li>
              <Link
                href="michael"
                className="px-12 py-4 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow transition-all duration-200 border-2 border-blue-800 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-800 text-lg tracking-wide"
              >
                Michael Imogu
              </Link>
            </li>
            <li>
              <Link
                href="feranmi"
                className="px-12 py-4 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow transition-all duration-200 border-2 border-blue-800 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-800 text-lg tracking-wide"
              >
                Feranmi Omodara
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}