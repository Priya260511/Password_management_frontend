import React from 'react';
import CredentialItem from './CredentialItem';

function CredentialsSection({ credentials, onEdit, onDelete }) {
  return (
    <section className="credentials-section">
      <h2>Your Saved Credentials</h2>
      {credentials.length === 0 ? (
        <div className="empty-state">
          <p>No credentials saved yet. Add one to get started!</p>
        </div>
      ) : (
        <div className="credentials-list">
          {credentials.map(credential => (
            <CredentialItem
              key={credential.id}
              credential={credential}
              onEdit={() => onEdit(credential)}
              onDelete={() => onDelete(credential.id)}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default CredentialsSection;
