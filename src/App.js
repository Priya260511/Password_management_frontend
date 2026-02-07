import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import FormSection from './components/FormSection';
import CredentialsSection from './components/CredentialsSection';
import EditModal from './components/EditModal';
import Footer from './components/Footer';
import './App.css';

const api = "http://localhost:8080/api/credentials";
//sonar test
function App() {
  const [credentials, setCredentials] = useState([]);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [editData, setEditData] = useState({ url: '', username: '', password: '' });

  // Load credentials on mount
  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Load all credentials
  const loadData = async () => {
    try {
      const response = await fetch(api);
      if (!response.ok) throw new Error("Failed to fetch credentials");
      const data = await response.json();
      setCredentials(data);
    } catch (error) {
      console.error("Error loading data:", error);
      showNotification("Failed to load credentials", "error");
    }
  };

  // Create new credential
  const handleAddCredential = async (data) => {
    try {
      const response = await fetch(api, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        await loadData();
        showNotification("Credential saved successfully!", "success");
      } else {
        showNotification("Failed to save credential", "error");
      }
    } catch (error) {
      console.error("Error:", error);
      showNotification("An error occurred. Please try again.", "error");
    }
  };

  // Open edit modal
  const handleOpenEditModal = (credential) => {
    setEditingId(credential.id);
    setEditData({
      url: credential.url,
      username: credential.username,
      password: credential.password
    });
    setShowEditModal(true);
  };

  // Close edit modal
  const handleCloseEditModal = () => {
    setShowEditModal(false);
    setEditingId(null);
    setEditData({ url: '', username: '', password: '' });
  };

  // Update credential
  const handleUpdateCredential = async (data) => {
    try {
      const response = await fetch(`${api}/${editingId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        handleCloseEditModal();
        await loadData();
        showNotification("Credential updated successfully!", "success");
      } else {
        showNotification("Failed to update credential", "error");
      }
    } catch (error) {
      console.error("Error:", error);
      showNotification("An error occurred. Please try again.", "error");
    }
  };

  // Delete credential
  const handleDeleteCredential = async (id) => {
    if (!window.confirm("Are you sure you want to delete this credential?")) return;

    try {
      const response = await fetch(`${api}/${id}`, { method: "DELETE" });

      if (response.ok) {
        await loadData();
        showNotification("Credential deleted successfully!", "success");
      } else {
        showNotification("Failed to delete credential", "error");
      }
    } catch (error) {
      console.error("Error:", error);
      showNotification("An error occurred", "error");
    }
  };

  const showNotification = (message, type) => {
    console.log(`[${type.toUpperCase()}] ${message}`);
  };

  return (
    <div className="container">
      <Header />

      <main className="content">
        <FormSection onAddCredential={handleAddCredential} />
        <CredentialsSection 
          credentials={credentials}
          onEdit={handleOpenEditModal}
          onDelete={handleDeleteCredential}
        />
      </main>

      {showEditModal && (
        <EditModal
          isOpen={showEditModal}
          editData={editData}
          onClose={handleCloseEditModal}
          onUpdate={handleUpdateCredential}
        />
      )}

      <Footer />
    </div>
  );
}

export default App;
