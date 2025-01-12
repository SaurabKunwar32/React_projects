import React, { useEffect, useState } from "react";

export default function NewCounter({ name }) {
  const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem("count");
    return savedCount ? parseInt(savedCount, 10) : 0;
  });

  // Save the value to localStorage whenever count changes
  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);

  return (
    <>
      <h2 className="mt-4">{name}</h2>
      <div className="flex gap-4 mt-6">
        <button
          className="  bg-blue-500 rounded-md px-4 py-1 "
          onClick={() => setCount(count - 1)}
        >
          -
        </button>
        <h1 className="text-xl font-bold">{count}</h1>
        <button
          className=" bg-blue-500 rounded-md px-4 py-1 "
          onClick={() => setCount(count + 1)}
        >
          +
        </button>
      </div>
    </>
  );
}
