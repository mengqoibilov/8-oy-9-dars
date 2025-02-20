"use client"
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Dashboard = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-gray-800 text-white p-4 flex justify-between">
        <h1 className="text-white text-2xl font-bold">&lt;/&gt; DevConnector</h1>
        <div className="space-x-4">
          <Link href="/developers" className="hover:underline">Developers</Link>
          <Link href="/Posts" className="hover:underline">Posts</Link>
          <Link href="/dashboard" className="hover:underline">Dashboard</Link>
          <Link href="/login" className="hover:underline">Logout</Link>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto mt-12 text-center">
        <h2 className="text-4xl font-bold text-teal-600">Dashboard</h2>
        <p className="text-lg mt-2 flex items-center justify-center">
          <span className="text-2xl mr-2">👤</span> Welcome
        </p>
        <p className="text-gray-600 mt-2">
          You have not yet set up a profile, please add some info.
        </p>
        <Link href="/CreateProfile">
          <button className="mt-4 px-6 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600">
            Create Profile
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
