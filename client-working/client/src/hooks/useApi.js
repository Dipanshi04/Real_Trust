import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { API_ENDPOINTS } from "../config/api";

// ============ PROJECTS ============

export const useProjects = (filters = {}) => {
  const queryParams = new URLSearchParams(filters).toString();
  const url = queryParams
    ? `${API_ENDPOINTS.PROJECTS}?${queryParams}`
    : API_ENDPOINTS.PROJECTS;

  return useQuery({
    queryKey: ["projects", filters],
    queryFn: async () => {
      const res = await fetch(url);
      if (!res.ok) throw new Error("Failed to fetch projects");
      return res.json();
    },
  });
};

export const useCreateProject = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data) => {
      const res = await fetch(API_ENDPOINTS.PROJECTS, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to create project");
      return res.json();
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["projects"] }),
  });
};

export const useUpdateProject = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id, data }) => {
      const res = await fetch(API_ENDPOINTS.PROJECT(id), {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to update project");
      return res.json();
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["projects"] }),
  });
};

export const useDeleteProject = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id) => {
      const res = await fetch(API_ENDPOINTS.PROJECT(id), {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Failed to delete project");
      return res.json();
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["projects"] }),
  });
};

// ============ CLIENTS ============

export const useClients = (filters = {}) => {
  const queryParams = new URLSearchParams(filters).toString();
  const url = queryParams
    ? `${API_ENDPOINTS.CLIENTS}?${queryParams}`
    : API_ENDPOINTS.CLIENTS;

  return useQuery({
    queryKey: ["clients", filters],
    queryFn: async () => {
      const res = await fetch(url);
      if (!res.ok) throw new Error("Failed to fetch clients");
      return res.json();
    },
  });
};

export const useCreateClient = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data) => {
      const res = await fetch(API_ENDPOINTS.CLIENTS, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to create client");
      return res.json();
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["clients"] }),
  });
};

export const useUpdateClient = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id, data }) => {
      const res = await fetch(API_ENDPOINTS.CLIENT(id), {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to update client");
      return res.json();
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["clients"] }),
  });
};

export const useDeleteClient = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id) => {
      const res = await fetch(API_ENDPOINTS.CLIENT(id), {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Failed to delete client");
      return res.json();
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["clients"] }),
  });
};

// ============ CONTACTS ============

export const useContacts = (filters = {}) => {
  const queryParams = new URLSearchParams(filters).toString();
  const url = queryParams
    ? `${API_ENDPOINTS.CONTACTS}?${queryParams}`
    : API_ENDPOINTS.CONTACTS;

  return useQuery({
    queryKey: ["contacts", filters],
    queryFn: async () => {
      const res = await fetch(url);
      if (!res.ok) throw new Error("Failed to fetch contacts");
      return res.json();
    },
  });
};

export const useCreateContact = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data) => {
      const res = await fetch(API_ENDPOINTS.CONTACTS, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to create contact");
      return res.json();
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["contacts"] }),
  });
};

export const useUpdateContact = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id, data }) => {
      const res = await fetch(API_ENDPOINTS.CONTACT(id), {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to update contact");
      return res.json();
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["contacts"] }),
  });
};

export const useDeleteContact = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id) => {
      const res = await fetch(API_ENDPOINTS.CONTACT(id), {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Failed to delete contact");
      return res.json();
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["contacts"] }),
  });
};

// ============ SUBSCRIBERS ============

export const useSubscribers = (filters = {}) => {
  const queryParams = new URLSearchParams(filters).toString();
  const url = queryParams
    ? `${API_ENDPOINTS.SUBSCRIBERS}?${queryParams}`
    : API_ENDPOINTS.SUBSCRIBERS;

  return useQuery({
    queryKey: ["subscribers", filters],
    queryFn: async () => {
      const res = await fetch(url);
      if (!res.ok) throw new Error("Failed to fetch subscribers");
      return res.json();
    },
  });
};

export const useCreateSubscriber = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data) => {
      const res = await fetch(API_ENDPOINTS.SUBSCRIBERS, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to subscribe");
      return res.json();
    },
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["subscribers"] }),
  });
};

export const useDeleteSubscriber = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id) => {
      const res = await fetch(API_ENDPOINTS.SUBSCRIBER(id), {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Failed to unsubscribe");
      return res.json();
    },
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["subscribers"] }),
  });
};
