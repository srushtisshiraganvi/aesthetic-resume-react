import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const Create = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    summary: '',
    education: '',
    experience: '',
    skills: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('http://localhost:4000/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    navigate('/preview');
  };

  return (
    <div className="create-container">
      <form onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td><label>Full name:</label></td>
              <td><input type="text" name="name" value={formData.name} onChange={handleChange} required /></td>
            </tr>
            <tr>
              <td><label>Email:</label></td>
              <td><input type="email" name="email" value={formData.email} onChange={handleChange} required /></td>
            </tr>
            <tr>
              <td><label>Phone:</label></td>
              <td><input type="tel" name="phone" value={formData.phone} onChange={handleChange} required /></td>
            </tr>
            <tr>
              <td><label>Profession:</label></td>
              <td><textarea name="summary" value={formData.summary} onChange={handleChange} /></td>
            </tr>
            <tr>
              <td><label>Education:</label></td>
              <td><textarea name="education" value={formData.education} onChange={handleChange} /></td>
            </tr>
            <tr>
              <td><label>Work Experience:</label></td>
              <td><textarea name="experience" value={formData.experience} onChange={handleChange} /></td>
            </tr>
            <tr>
              <td><label>Skills:</label></td>
              <td><textarea name="skills" value={formData.skills} onChange={handleChange} /></td>
            </tr>
            <tr>
              <td><button type="submit">Preview Resume →</button></td>
            </tr>
          </tbody>
        </table>
      </form>
      <Outlet />
    </div>
  );
};

export default Create;
