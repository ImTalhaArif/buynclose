'use client';

import { useEffect, useState } from 'react';
import { Eye, EyeOff } from 'lucide-react'; // Optional: for show/hide password toggle

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
  const [authenticated, setAuthenticated] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (authenticated) {
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
    }
  }, [authenticated]);

  const handleLogin = () => {
    if (email === 'johnirving@gmail.com' && password === 'abcd1234') {
      setAuthenticated(true);
      setError('');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="relative min-h-screen bg-gray-100 p-6">
      {/* Login Modal */}
      {!authenticated && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur">
          <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-sm">
            <h2 className="text-xl font-semibold text-center mb-4">🔐 Secure Login</h2>
            {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
            <input
              type="email"
              placeholder="Email"
              className="w-full mb-3 p-2 border border-gray-300 rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="relative mb-3">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                className="w-full p-2 border border-gray-300 rounded"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div
                className="absolute top-2.5 right-3 cursor-pointer text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </div>
            </div>
            <button
              onClick={handleLogin}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded"
            >
              Log In
            </button>
          </div>
        </div>
      )}

      {/* Lead Content */}
      {authenticated && (
        <>
          <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">📋 Lead Submissions</h1>

          {loading ? (
            <p className="text-center text-gray-600">Loading leads...</p>
          ) : (
            <div className="overflow-x-auto shadow-lg rounded-xl bg-white p-4">
              <table className="min-w-full border border-gray-300 text-sm text-gray-700">
                <thead className="bg-blue-100 text-gray-900">
                  <tr>
                    <th className="border px-4 py-2">Name</th>
                    <th className="border px-4 py-2">Email</th>
                    <th className="border px-4 py-2">Phone</th>
                    <th className="border px-4 py-2">Address</th>
                    <th className="border px-4 py-2">City</th>
                    <th className="border px-4 py-2">State</th>
                    <th className="border px-4 py-2">Zipcode</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((lead, index) => (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                    >
                      <td className="border px-4 py-2">{lead.name}</td>
                      <td className="border px-4 py-2">{lead.email}</td>
                      <td className="border px-4 py-2">{lead.phone}</td>
                      <td className="border px-4 py-2">{lead.address}</td>
                      <td className="border px-4 py-2">{lead.city}</td>
                      <td className="border px-4 py-2">{lead.state}</td>
                      <td className="border px-4 py-2">{lead.zipcode}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </>
      )}
    </div>
  );
}
