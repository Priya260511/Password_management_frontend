import React, { useState } from 'react';

function CredentialItem({ credential, onEdit, onDelete }) {
  const [showPassword, setShowPassword] = useState(false);

  const escapeHtml = (text) => {
    const map = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;"
    };
    return text.replace(/[&<>"']/g, m => map[m]);
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="credential-item">
      <div className="credential-header">
        <span className="credential-url">{escapeHtml(credential.url)}</span>
      </div>
      <div className="credential-details">
        <div className="detail-row">
          <span className="detail-label">Username</span>
          <span className="detail-value">{escapeHtml(credential.username)}</span>
        </div>
        <div className="detail-row">
          <span className="detail-label">Password</span>
          <span className="detail-value">
            {showPassword ? escapeHtml(credential.password) : '••••••••'}
          </span>
        </div>
      </div>
      <div className="credential-actions">
        <button
          className="btn btn-toggle"
          onClick={togglePassword}
          type="button"
        >
          {showPassword ? 'Hide Password' : 'Show Password'}
        </button>
        <button
          className="btn btn-edit"
          onClick={onEdit}
          type="button"
        >
          Edit
        </button>
        <button
          className="btn btn-danger"
          onClick={onDelete}
          type="button"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default CredentialItem;
