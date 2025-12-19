// API base URL configuration
export const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000/api";

// API endpoints
export const API_ENDPOINTS = {
  // Projects
  PROJECTS: `${API_BASE_URL}/projects`,
  PROJECT: (id) => `${API_BASE_URL}/projects/${id}`,

  // Clients
  CLIENTS: `${API_BASE_URL}/clients`,
  CLIENT: (id) => `${API_BASE_URL}/clients/${id}`,

  // Contacts
  CONTACTS: `${API_BASE_URL}/contacts`,
  CONTACT: (id) => `${API_BASE_URL}/contacts/${id}`,

  // Subscribers
  SUBSCRIBERS: `${API_BASE_URL}/subscribers`,
  SUBSCRIBER: (id) => `${API_BASE_URL}/subscribers/${id}`,
};
