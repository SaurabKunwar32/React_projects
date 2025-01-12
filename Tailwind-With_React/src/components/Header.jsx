import React, { useState } from "react";
import viteLogo from "/vite.svg";
import { NavLink } from "react-router-dom";
import Modal from "./Modal";
import POPupdata from "./POPupdata";
import PPchil from "./PPChildren";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="flex justify-between shadow-md px-4  py-4  md:px-8 ">
      <img src={viteLogo} alt="logo" />

      <ul className="flex gap-4">
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "underline text-blue-700" : ""
            }
            to="/Home"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "underline text-blue-700" : ""
            }
            to="/About"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "underline text-blue-700" : ""
            }
            to="/Contact"
          >
            Contact
          </NavLink>
        </li>

        <li>
          <button
            onClick={() => setIsOpen(true)}
            className="
            px-1
            py-1
            text-green-500
            border-2
            border-black
            rounded-md"
          >
            Sign In
          </button>
          <Modal
            setIsOpen={setIsOpen}
            isOpen={isOpen}
            popUpHeader={<div className="text-xl font-bold">Sign In</div>}
            popUpFooter={<POPupdata setIsOpen={setIsOpen} />}
          >
            <PPchil />
          </Modal>
        </li>
        <li></li>
      </ul>
    </header>
  );
}
