import React, { useState, useEffect } from 'react';

function EditModal({ isOpen, editData, onClose, onUpdate }) {
  const [formData, setFormData] = useState(editData);

  useEffect(() => {
    setFormData(editData);
  }, [editData]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    const fieldName = id.replace('edit', '');
    setFormData(prev => ({
      ...prev,
      [fieldName.charAt(0).toLowerCase() + fieldName.slice(1)]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      url: formData.url,
      username: formData.username,
      password: formData.password
    };
    await onUpdate(data);
  };

  if (!isOpen) return null;

  return (
    <div className={`modal show`} onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal-content">
        <div className="modal-header">
          <h2>Edit Credential</h2>
          <button className="close-btn" onClick={onClose} type="button">&times;</button>
        </div>
        <form className="credential-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="editUrl">Website URL</label>
            <input
              type="url"
              id="editUrl"
              placeholder="https://example.com"
              value={formData.url}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="editUsername">Username / Email</label>
            <input
              type="text"
              id="editUsername"
              placeholder="your.email@example.com"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="editPassword">Password</label>
            <input
              type="password"
              id="editPassword"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="modal-actions">
            <button type="submit" className="btn btn-primary">Update Credential</button>
            <button type="button" className="btn btn-secondary" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditModal;
