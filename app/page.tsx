// Updated Next.js Landing Page mimicking the look and structure of https://offer.amphomebuyer.com

"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LandingPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const router = useRouter();

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    // Add API submission logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white flex flex-col items-center justify-start py-12 px-6">
      <div className="max-w-3xl w-full text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Sell Your Home Fast & Hassle-Free</h1>
        <p className="text-lg md:text-xl">
          Get a fair cash offer within 24 hours. No commissions. No fees. No repairs needed.
        </p>
      </div>

      <div className="bg-white text-black p-8 rounded-xl shadow-2xl w-full max-w-xl">
        {submitted ? (
          <div className="text-center text-2xl font-semibold text-green-600">
            Thank you! We will contact you shortly.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block mb-2 font-semibold">Full Name</label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-md"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold">Email Address</label>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-md"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold">Phone Number</label>
              <input
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-md"
                placeholder="(123) 456-7890"
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold">Property Address</label>
              <input
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-md"
                placeholder="123 Main St, City, State"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-md transition"
            >
              Get My Cash Offer
            </button>
          </form>
        )}
      </div>

      <div className="mt-10 text-center text-sm text-gray-300">
        By submitting this form, you agree to our Terms of Service and Privacy Policy.
      </div>
    </div>
  );
}
