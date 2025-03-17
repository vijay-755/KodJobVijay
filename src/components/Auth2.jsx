import React, { useState } from "react";
import ParticleBackground from "./ParticleBackground";


import "../styles/GlassMorphism.css";

const AuthPage = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/login", formData);
      alert(response.data.message);
    } catch (error) {
      alert("Error: " + error.response.data.message);
    }
  };
  return (
    <div >
      <ParticleBackground />
        <div className="glassmorphism2"> 
          
          <div className="form-section2"> 
          
       
    <form className="auth-form form" onSubmit={handleSubmit}>

           
      <h2><span>KodNest</span><br/><span><p className="p">-Chase your DREAM here</p></span><br/>Login</h2>
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
      <button type="submit">Login</button>
      <p onClick={() => setIsRegistering(true)}>
        
      </p>
    </form>




          </div>
        </div>    
    </div>
  );
};

export default AuthPage;
