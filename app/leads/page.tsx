'use client';

import { useEffect, useState } from 'react';

type Submission = {
  name: string;
  email: string;
  phone: string;
  message: string;
  createdAt: string;
};

export default function LeadsPage() {
  const [data, setData] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://oowa6i2ukx7nimeaqb6yjsir7y0spnmj.lambda-url.eu-north-1.on.aws/?TableName=tbl_data', {
      method: 'GET',
    })
      .then((res) => res.json()) // ✅ Convert response to JSON
      .then((json) => {
        const typedData = json as { Items: Submission[] }; // ✅ Explicitly cast it
        if (typedData.Items) {
          setData(typedData.Items);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching data:', err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Leads</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2">Name</th>
                <th className="border border-gray-300 px-4 py-2">Email</th>
                <th className="border border-gray-300 px-4 py-2">Phone</th>
                <th className="border border-gray-300 px-4 py-2">Message</th>
                <th className="border border-gray-300 px-4 py-2">Date</th>
              </tr>
            </thead>
            <tbody>
              {data.map((lead, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 px-4 py-2">{lead.name}</td>
                  <td className="border border-gray-300 px-4 py-2">{lead.email}</td>
                  <td className="border border-gray-300 px-4 py-2">{lead.phone}</td>
                  <td className="border border-gray-300 px-4 py-2">{lead.message}</td>
                  <td className="border border-gray-300 px-4 py-2">{new Date(lead.createdAt).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
