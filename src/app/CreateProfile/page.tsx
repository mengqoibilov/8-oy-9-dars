"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const CreateProfile = () => {
  const [formData, setFormData] = useState({
    status: '',
    company: '',
    website: '',
    location: '',
    skills: '',
    github: '',
    bio: '',
  });

  const [submitted, setSubmitted] = useState(false); 
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-100">
     
        <nav className="bg-gray-800 text-white p-4 flex justify-between">
          <h1 className="text-2xl font-bold">&lt;/&gt; DevConnector</h1>
          <div className="space-x-4">
            <a href="/developers" className="hover:underline">Developers</a>
            <a href="/posts" className="hover:underline">Posts</a>
            <a href="/dashboard" className="hover:underline">Dashboard</a>
            <a href="/login" className="hover:underline">Logout</a>
          </div>
        </nav>

    
        <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-teal-600">Dashboard</h2>
          <p className="text-gray-600 mb-4 flex items-center">
            <span className="mr-2">👤</span> Welcome <b>{formData.github || "User"}</b>
          </p>

          <div className="flex space-x-4 mb-4">
            <button className="px-4 py-2 bg-gray-200 rounded flex items-center">
              ✏️ Edit Profile
            </button>
            <button className="px-4 py-2 bg-gray-200 rounded flex items-center">
              ➕ Add Experience
            </button>
            <button className="px-4 py-2 bg-gray-200 rounded flex items-center">
              ➕ Add Education
            </button>
          </div>

          <h3 className="text-xl font-semibold">Experience Credentials</h3>
          <table className="w-full border mt-2">
            <thead>
              <tr className="border-b">
                <th className="p-2">Company</th>
                <th className="p-2">Title</th>
                <th className="p-2">Years</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>

          <h3 className="text-xl font-semibold mt-4">Education Credentials</h3>
          <table className="w-full border mt-2">
            <thead>
              <tr className="border-b">
                <th className="p-2">School</th>
                <th className="p-2">Degree</th>
                <th className="p-2">Years</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>

          <button className="mt-6 px-4 py-2 bg-red-500 text-white rounded flex items-center">
            🗑️ Delete My Account
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-teal-600">Create Your Profile</h2>
        <p className="text-gray-600 mb-4">Let&apos;s get some information to make your profile stand out</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <select name="status" value={formData.status} onChange={handleChange} required className="w-full p-2 border rounded">
            <option value="">Select Professional Status</option>
            <option value="developer">Developer</option>
            <option value="junior developer">Junior Developer</option>
            <option value="senior developer">Senior Developer</option>
          </select>

          <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Company" className="w-full p-2 border rounded" />
          <input type="text" name="website" value={formData.website} onChange={handleChange} placeholder="Website" className="w-full p-2 border rounded" />
          <input type="text" name="location" value={formData.location} onChange={handleChange} placeholder="Location" className="w-full p-2 border rounded" />
          <input type="text" name="skills" value={formData.skills} onChange={handleChange} placeholder="Skills (e.g. HTML, CSS, JS)" required className="w-full p-2 border rounded" />
          <input type="text" name="github" value={formData.github} onChange={handleChange} placeholder="Github Username" className="w-full p-2 border rounded" />
          <textarea name="bio" value={formData.bio} onChange={handleChange} placeholder="A short bio of yourself" className="w-full p-2 border rounded"></textarea>

          <button type="submit" className="w-full p-2 bg-teal-500 text-white rounded hover:bg-teal-600">
            Submit
          </button>
          <button type="button" className='mt-4 px-6 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600' onClick={() => router.push('/dashboard')}>Go Back</button>
        </form>
      </div>
    </div>
  );
};

export default CreateProfile;





