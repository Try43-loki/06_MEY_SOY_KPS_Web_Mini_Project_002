"use client";
import { LogOutIcon } from "lucide-react";
import { signOut } from "next-auth/react";
import React from "react";

const LogoutComponent = async () => {
  const handleLogOut = async () => {
    await signOut({
      redirect: false,
      pages: {
        signIn: "/login",
      },
    });
  };

  return (
    <>
      <button
        onClick={handleLogOut}
        className="flex justify-center items-center text-persian-green gap-2 cursor-pointer  self-start"
      >
        <LogOutIcon />
        <span className=" font-semibold ">Logout</span>
      </button>
    </>
  );
};

export default LogoutComponent;
