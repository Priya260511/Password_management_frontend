import React, { useState } from 'react';

function FormSection({ onAddCredential }) {
  const [formData, setFormData] = useState({
    url: '',
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (formData.url && formData.username && formData.password) {
      await onAddCredential(formData);
      setFormData({ url: '', username: '', password: '' });
    }
  };

  return (
    <section className="form-section">
      <h2>Add New Credential</h2>
      <form className="credential-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="url">Website URL</label>
          <input
            type="url"
            id="url"
            placeholder="https://example.com"
            value={formData.url}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="username">Username / Email</label>
          <input
            type="text"
            id="username"
            placeholder="your.email@example.com"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Save Credential</button>
      </form>
    </section>
  );
}

export default FormSection;
