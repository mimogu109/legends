import Link from "next/link";
import { useState } from "react";

export default function Michael() {
  const [count, setCount] = useState(0);
  return (
    <div
      className="bg-gradient-to-br from-blue-400 via-blue-500 to-blue-700 min-h-screen flex items-center justify-center"
      style={{ fontFamily: "Bahnschrift, Arial, sans-serif" }}
    >
      <div className="bg-white/90 rounded-2xl shadow-2xl p-20 max-w-3xl w-full">
        <h1 className="text-4xl font-bold text-blue-700 mb-10 text-center drop-shadow">
          Michael Imogu
        </h1>
        <div className="mb-8 space-y-4 text-lg text-gray-700">
          <p>Michael Imogu is a 12 year old. He goes to Dowen College, one of the best schools in the world.</p>
          <p>He is the person that typed what you&apos;re reading now as well. He lives in Lagos, with his mom and dad, while his three sisters are abroad, working and schooling.</p>
          <p>He is one of Jehovah&apos;s Witnesses. Also, I forgot to mention, he is in SS 0.5 - it&apos;s complicated.</p>
        </div>
        <div className="flex justify-center mb-10">
          <Link
            href="/"
            className="px-8 py-3 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow transition-all duration-200 border-2 border-blue-800 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-800 text-lg tracking-wide"
          >
            Click this to leave
          </Link>
        </div>
        <div className="bg-blue-50 rounded-lg p-6 shadow-inner flex flex-col items-center">
          <p className="mb-4 text-blue-800 font-medium">If you want to, you can play with this.</p>
          <div className="flex gap-4 mb-2">
            <button
              onClick={() => setCount(count + 1)}
              className="px-6 py-2 rounded-md bg-blue-500 hover:bg-blue-600 text-white font-semibold shadow transition-all duration-200 border-2 border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 text-lg"
            >
              +1
            </button>
            <button
              onClick={() => setCount(count - 1)}
              className="px-6 py-2 rounded-md bg-blue-500 hover:bg-blue-600 text-white font-semibold shadow transition-all duration-200 border-2 border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 text-lg"
            >
              -1
            </button>
          </div>
          <p className="text-blue-900 font-bold text-xl">Number: {count}</p>
        </div>
      </div>
    </div>
  );
}