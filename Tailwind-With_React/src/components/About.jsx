import React, { useState } from "react";
import Modal from "./Modal";

export default function () {
  const [isOpen, setIsOpen] = useState(false);
  const [loadData, setLoadData] = useState([]);

  return (
    <>
      <h1 className="px-4  py-4   text-xl">Welcome are begineers !!</h1>
      <button
        onClick={() => setIsOpen(true)}
        className="px-2 py-2 mx-4 text-xl font-bold text-red-700 border-2 border-black rounded-3xl"
      >
        OPEN POP-UP
      </button>
      <Modal
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        popUpHeader={<div className="text-xl font-bold">Information</div>}
        popUpFooter={
          <div className="flex justify-end gap-4">
            <button
              onClick={() => setIsOpen(false)}
              className="rounded-md bg-gray-300 px-6 py-2 font-semibold hover:bg-gray-400/80 active:bg-gray-400/60"
            >
              Cancel
            </button>
          </div>
        }
      >
        <p className="font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sunt,
          perferendis incidunt quos dolor maxime minus earum quasi fuga, ducimus
          quisquam distinctio sequi molestias. Odio iure nulla fugiat ipsam
          similique.
        </p>
      </Modal>

      <div className="px-4  py-4">
        <button
          onClick={() => {
            import("../data").then((module) => {
              setLoadData(module.todos);
            });
          }}
          className="px-2 py-2 mx-4 text-xl font-bold text-red-700 border-2 border-black rounded-3xl"
        >
          Load Data
        </button>
        <ul>
          {loadData.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
