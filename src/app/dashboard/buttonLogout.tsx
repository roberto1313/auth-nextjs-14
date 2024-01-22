"use client";

import { signOut } from "next-auth/react";

export default function ButtonLogout() {
  return (
    <button
      className="outline-none border-cyan-50 p-2 text-sm rounded-lg  text-white hover:bg-cyan-900 hover:text-cyan-400"
      onClick={() => signOut()}
    >
      Logout
    </button>
  );
}
