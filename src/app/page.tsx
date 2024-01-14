"use client"
import { signIn } from 'next-auth/react'

export default function Home() {
  return (
    <main>
      <div className='flex justify-center items-center h-screen'>
        <button className='bg-cyan-700 p-4 rounded-lg hover:bg-cyan-500 text-white font-semibold'
          onClick={() => signIn("github", { callbackUrl: "/dashboard" })}
        >Sign in with Github</button>
      </div>
    </main>
  )
}
