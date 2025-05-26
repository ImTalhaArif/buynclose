'use client';

import { useEffect, useState } from 'react';

type Submission = {
  address: string;
  name: string;
  email: string;
  phone: string;
  city: string;
  state: string;
  zipcode: string;
};

export default function LeadsPage() {
  const [data, setData] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://oowa6i2ukx7nimeaqb6yjsir7y0spnmj.lambda-url.eu-north-1.on.aws/', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((json) => {
        const typedData = json as { Items: Submission[] };
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
                <th className="border border-gray-300 px-4 py-2">Address</th>
                <th className="border border-gray-300 px-4 py-2">City</th>
                <th className="border border-gray-300 px-4 py-2">State</th>
                <th className="border border-gray-300 px-4 py-2">Zipcode</th>
              </tr>
            </thead>
            <tbody>
              {data.map((lead, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 px-4 py-2">{lead.name}</td>
                  <td className="border border-gray-300 px-4 py-2">{lead.email}</td>
                  <td className="border border-gray-300 px-4 py-2">{lead.phone}</td>
                  <td className="border border-gray-300 px-4 py-2">{lead.address}</td>
                  <td className="border border-gray-300 px-4 py-2">{lead.city}</td>
                  <td className="border border-gray-300 px-4 py-2">{lead.state}</td>
                  <td className="border border-gray-300 px-4 py-2">{lead.zipcode}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
