"use client";

import { useEffect, useState } from "react";

interface Submission {
  user_id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  createdAt: string;
}

export default function LeadsPage() {
  const [data, setData] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://4xjr2vrsquy7rfhm4cuaioshf40mynai.lambda-url.eu-north-1.on.aws/", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data as Submission[]);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Submitted Leads</h1>

      {loading ? (
        <div className="text-center text-lg">Loading...</div>
      ) : data.length === 0 ? (
        <div className="text-center text-lg text-gray-500">No leads found.</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-md overflow-hidden">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="text-left py-3 px-4">Name</th>
                <th className="text-left py-3 px-4">Email</th>
                <th className="text-left py-3 px-4">Phone</th>
                <th className="text-left py-3 px-4">Address</th>
                <th className="text-left py-3 px-4">Submitted At</th>
              </tr>
            </thead>
            <tbody>
              {data.map((entry) => (
                <tr key={entry.user_id} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">{entry.name}</td>
                  <td className="py-3 px-4">{entry.email}</td>
                  <td className="py-3 px-4">{entry.phone}</td>
                  <td className="py-3 px-4">{entry.address}</td>
                  <td className="py-3 px-4">{new Date(entry.createdAt).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
