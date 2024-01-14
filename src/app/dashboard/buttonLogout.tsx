'use client'

import { signOut } from "next-auth/react"

export default function ButtonLogout() {
    return (
        <button 
        className="outline-none border-cyan-50 p-2 text-sm rounded-lg bg-cyan-900 text-white hover:bg-white hover:text-black"
            onClick={() => signOut()}
        >Logout</button>
    )
}