import React from "react";
import { FaPhone, FaEnvelope, FaGithub } from "react-icons/fa";

function Home() {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Welcome to My Website</h1>
      <img
        src="https://via.placeholder.com/150"
        alt="My Avatar"
        style={{ borderRadius: "50%", marginBottom: "20px" }}
      />
      <h2>John Doe</h2>
      <p>Age: 25</p>
      <h3>Contact Information</h3>
      <div>
        <p>
          <FaPhone /> +123456789
        </p>
        <p>
          <FaEnvelope /> email@example.com
        </p>
        <p>
          <FaGithub /> github.com/johndoe
        </p>
      </div>
    </div>
  );
}

export default Home;
