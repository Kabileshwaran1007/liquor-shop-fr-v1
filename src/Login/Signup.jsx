import React, { useState } from 'react';
import './Signup.css';
import { useNavigate } from 'react-router-dom';

export const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    console.log(name, value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    const data = {
      username: formData.name,
      email: formData.email,
      password: formData.password
    };

    if (!data.username || !data.email || !data.password) {
      alert("Please fill in all fields.");
    } else {
      fetch("http://localhost:8080/register", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json' // Corrected 'application/Json' to 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then(response => {
          console.log(response);
          if (!response.ok) {
            throw new Error(`Server returned status: ${response.status}`);
          } else {
            alert("Signup successful, Please Login!");
            navigate("/login");
          }
        })
        .catch(error => {
          console.error("Error:", error);
          alert("An error occurred while signing up. Please try again later.");
        });

    }
  };

  return (
    <div>
      <div className='signup-page'>
        <div className='signup-container'>
          <form onSubmit={handleSubmit} className='signup-form'>
            <h2 className='text-light'>Sign Up</h2>
            <div className="underline"></div>
            <input type="text" name='name' placeholder='Username' value={formData.name} onChange={handleChange} />
            <br />
            <input type="email" name='email' placeholder='Email' value={formData.email} onChange={handleChange} />
            <br />
            <input type="password" name='password' placeholder='Password' value={formData.password} onChange={handleChange} />
            <br />
            <input type="submit" className='btn btn-primary btn-block' value="Sign Up" />
          </form>
        </div>
      </div>
    </div>
  );
};
