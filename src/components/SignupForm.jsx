import React, { useState } from 'react';

function SignupForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  // ✅ Real-time Validation
  const validate = (data) => {
    const newErrors = [];
    if (!data.name.trim()) newErrors.push('Name is required.');
    if (!data.email.includes('@')) newErrors.push('Valid email is required.');
    if (data.password.length < 6) newErrors.push('Password must be at least 6 characters.');
    if (data.password !== data.confirmPassword) newErrors.push('Passwords do not match.');
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newFormData = { ...formData, [name]: value };

    setFormData(newFormData);
    setErrors(validate(newFormData)); // 🔄 real-time validation on each change
    setSubmitted(false); // reset submitted on change
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate(formData);

    if (newErrors.length > 0) {
      setErrors(newErrors);
      setSubmitted(false);
    } else {
      setErrors([]);
      setSubmitted(true);
    }
  };

  const handleClear = () => {
    setFormData({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
    setErrors([]);
    setSubmitted(false);
  };

  return (
    <div className="max-w-md w-full bg-white p-6 rounded shadow-md transition-all duration-300 ease-in-out hover:shadow-xl">
      <h2 className="text-xl font-bold mb-4 text-center">Signup Form</h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        {/* Name Input */}
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 transition-all"
        />

        {/* Email Input */}
        <input
          type="email"
          name="email"
          placeholder="you@example.com"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 transition-all"
        />

        {/* Password Input */}
        <input
          type="password"
          name="password"
          placeholder="Create a password"
          value={formData.password}
          onChange={handleChange}
          className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 transition-all"
        />

        {/* Confirm Password Input */}
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm password"
          value={formData.confirmPassword}
          onChange={handleChange}
          className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 transition-all"
        />

        {/* Buttons */}
        <div className="flex gap-2">
          <button
            type="submit"
            className="flex-1 bg-green-600 text-black p-2 rounded hover:bg-blue-700 transition-all"
          >
            Sign Up
          </button>
          <button
            type="button"
            onClick={handleClear}
            className="flex-1 bg-gray-300 text-black p-2 rounded hover:bg-gray-400 transition-all"
          >
            Clear
          </button>
        </div>
      </form>

      {/* Errors or Success */}
      <div className="mt-4 transition-all duration-300 ease-in-out">
        {errors.length > 0 && (
          <ul className="text-red-600 list-disc pl-5 space-y-1">
            {errors.map((err, idx) => (
              <li key={idx} className="animate-pulse">{err}</li>
            ))}
          </ul>
        )}
        {submitted && (
          <p className="text-green-600 font-medium transition-all duration-500 ease-in-out animate-fadeIn">
            ✅ Signup successful!
          </p>
        )}
      </div>
    </div>
  );
}

export default SignupForm;
