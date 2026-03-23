import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import FormSection from './components/FormSection';
import CredentialsSection from './components/CredentialsSection';
import EditModal from './components/EditModal';
import Footer from './components/Footer';
import './App.css';

const api = "http://localhost:8080/api/credentials";

function App() {
  const [credentials, setCredentials] = useState([]);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [editData, setEditData] = useState({ url: '', username: '', password: '' });

  // ✅ NEW: Notification state
  const [notification, setNotification] = useState({ message: "", type: "" });

  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  const handleOpenEditModal = (credential) => {
    setEditingId(credential.id);
    setEditData({
      url: credential.url,
      username: credential.username,
      password: credential.password
    });
    setShowEditModal(true);
  };

  const handleCloseEditModal = () => {
    setShowEditModal(false);
    setEditingId(null);
    setEditData({ url: '', username: '', password: '' });
  };

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

  const handleDeleteCredential = async (id) => {
    if (!window.confirm("⚠️ This action cannot be undone. Delete this credential?")) return;

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

  // ✅ UPDATED notification function
  const showNotification = (message, type) => {
    setNotification({ message, type });

    setTimeout(() => {
      setNotification({ message: "", type: "" });
    }, 3000);
  };

  return (
    <div className="container">
      <Header />

      {/* ✅ Notification UI */}
      {notification.message && (
        <div className={`notification ${notification.type}`}>
          {notification.message}
        </div>
      )}

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
