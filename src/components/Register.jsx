import React, { useState } from "react";
import axios from "axios";

const Register = ({ setIsRegistering }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    dob: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const payload = {
      username: formData.name,
      number: formData.phone,
      dob: formData.dob,
      email: formData.email,
      password: formData.password,
    };
  
    try {
      const response = await axios.post("http://localhost:5000/register", payload);
      alert("Registration successful!");
      setIsRegistering(false);
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
      alert("Error: " + (error.response?.data?.error || "Registration failed"));
    }
  };
  

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h2>Register</h2>
      <input
        type="text"
        name="name"
        placeholder="Full Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="phone"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name="dob"
        placeholder="Date of Birth"
        value={formData.dob}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        required
      />
      <button type="submit">Register</button>
      <p onClick={() => setIsRegistering(false)}>
        Already have an account? Login here!
      </p>
    </form>
  );
};

export default Register;
