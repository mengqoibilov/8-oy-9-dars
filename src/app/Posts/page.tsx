import Link from 'next/link'
import React from 'react'

function Posts() {
  return (
    <div>
   <nav className="bg-gray-800 text-white p-4 flex justify-between">
        <h1 className="text-white text-2xl font-bold">&lt;/&gt; DevConnector</h1>
        <div className="space-x-4">
          <Link href="/developers" className="hover:underline">Developers</Link>
          <Link href="/Posts" className="hover:underline">Posts</Link>
          <Link href="/dashboard" className="hover:underline">Dashboard</Link>
          <Link href="/login" className="hover:underline">Logout</Link>
        </div>
      </nav>
      <h1 className="text-center text-4xl font-bold"> here is Posts</h1>
    </div>
  )
}

export default Posts
