import React, { useState } from "react";
import ParticleBackground from "./ParticleBackground";
import Login from "./Login";
import Register from "./Register";
import "../styles/GlassMorphism.css";

const AuthPage = () => {
  const [isRegistering, setIsRegistering] = useState(false);

  return (
    <div className="auth-container" style={{ paddingTop: "80px" }}>
      <ParticleBackground />
      <div className="glassmorphism"> 
        <div className="image-section ">
          <div className="text">
            <h1>KodNest</h1>
            <h3 className="main-heading">Find The Job That Fits Your Life</h3>
            <p className="job-desc">
              Millions of people are searching for jobs, salary<br/>
              information, and company reviews. Find the job <br/>that fits your abilities and potential.
            </p>
          </div>
        </div>
        <div>
          <div className="form-section ">
            {isRegistering ? (
              <Register setIsRegistering={setIsRegistering} />
            ) : (
              <Login setIsRegistering={setIsRegistering} />
            )}
          </div>
        </div>  
      </div>    
    </div>
  );
};

export default AuthPage;
