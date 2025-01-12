import React from "react";

export default function POPupdata({setIsOpen}) {
  return (
    <div className="flex justify-end gap-4">
      <button
        onClick={() => setIsOpen(false)}
        className="rounded-md bg-gray-300 px-6 py-2 font-semibold hover:bg-gray-400/80 active:bg-gray-400/60"
      >
        Cancel
      </button>
      <button className="rounded-md bg-blue-300 px-6 py-2 font-semibold hover:bg-blue-400/80 active:bg-blue-400/60">
        Sign In
      </button>
    </div>
  );
}
