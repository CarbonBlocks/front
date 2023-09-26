"use client";
// components/SignUp.tsx

import { useState, ChangeEvent, FormEvent } from "react";

const SignUp = () => {
  const [signedUp, setSignedUp] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }
    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Form submitted successfully!");
        setSignedUp(true);
        setFormData({
          email: "",
        });
      } else {
        console.log("Form submission failed!");
      }
    } catch (error) {
      console.log("Form submission error:", error);
    }
  };

  return (
    <section id="signup" className="text-gray-900">
      <div className="container mx-auto p-6 shadow-md rounded-md mb-5">
        {signedUp ? (
          <div className="text-white text-2xl font-bold text-center mt-6">
            <p>Thanks for signing up!</p>
            <p>We will get back to you soon</p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center space-y-6 min-w-[10rem]"
          >
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              pattern="^\S+@\S+\.\S+$"
              title="Please enter a valid email address."
              className="p-4 w-full min-w-[20rem] text-black rounded-md mb-2 placeholder-black focus:outline-none"
              placeholder="Email"
            />
            <button
              type="submit"
              className="py-3 px-5 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 focus:outline-none active:bg-blue-700"
            >
              Join Waitlist
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default SignUp;
