"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const { push } = useRouter();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    push(`/prediction/${inputValue}`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-600">
      <h1 className="text-white text-3xl text-center font-bold mb-16 px-16 md:text-5xl px-24">Type a name to predict a person&apos;s age, gender and nationality</h1>
      <div className="p-4 shadow-md bg-white rounded-md w-5/6 md:w-1/2 lg:w-1/3">
        <h2 className="text-xl font-semibold text-black mb-4 md:text-2xl">Enter your name:</h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            placeholder="Type your name..."
            className="w-full p-2 border border-gray-300 rounded text-black md:w-full"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white hover:bg-blue-500 
              font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          >
            Predict Data
          </button>
        </form>
        </div>
    </div>
  );
}
