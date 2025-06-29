import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Home from "../pages/Home"
function Register() {
 const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [error, setError] = useState("");

  // Regex patterns
  const nameRegex = new RegExp("^[A-Za-z ]{3,}$");
  const emailRegex = new RegExp("^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$");
  const passwordRegex = new RegExp("^[A-Za-z0-9]{6,}$");
  const mobileRegex = new RegExp("^[6-9][0-9]{9}$");

  const isValid = (regex, value) => {
    // Use exec to simulate `.test()` behavior
    return regex.exec(value) !== null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !password || !mobile) {
      setError("All fields are required.");
      return;
    }

    if (!isValid(nameRegex, name)) {
      setError("Name must be at least 3 characters and contain only letters.");
      return;
    }

    if (!isValid(emailRegex, email)) {
      setError("Invalid email format.");
      return;
    }

    if (!isValid(passwordRegex, password)) {
      setError("Password must be 6+ characters with letters and digits only.");
      return;
    }

    if (!isValid(mobileRegex, mobile)) {
      setError("Mobile must be 10 digits starting with 6-9.");
      return;
    }

    const userData = { name, email, password, mobile };
    localStorage.setItem("userData", JSON.stringify(userData));
    sessionStorage.setItem("userSession", JSON.stringify(userData));

    setError("");
    
    navigate("/home");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-full max-w-sm"
      >
        <h2 className="text-xl font-bold mb-4 text-center">Register</h2>

        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-3"
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-3"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-3"
        />

        <input
          type="tel"
          placeholder="Mobile"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-3"
        />

        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
       >
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
