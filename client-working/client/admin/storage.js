// Simple localStorage-backed storage for admin data
const KEY_PROJECTS = 'admin:projects';
const KEY_CLIENTS = 'admin:clients';
const KEY_CONTACTS = 'admin:contacts';
const KEY_SUBSCRIBERS = 'admin:subscribers';

function read(key) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function write(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

// Projects
export function getProjects() {
  return read(KEY_PROJECTS);
}

export function saveProjects(items) {
  write(KEY_PROJECTS, items);
}

export function addProject(project) {
  const items = getProjects();
  items.unshift(project);
  saveProjects(items);
  return items;
}

export function updateProject(id, patch) {
  const items = getProjects().map((p) => (p.id === id ? { ...p, ...patch } : p));
  saveProjects(items);
  return items;
}

export function deleteProject(id) {
  const items = getProjects().filter((p) => p.id !== id);
  saveProjects(items);
  return items;
}

// Clients
export function getClients() {
  return read(KEY_CLIENTS);
}

export function saveClients(items) {
  write(KEY_CLIENTS, items);
}

export function addClient(client) {
  const items = getClients();
  items.unshift(client);
  saveClients(items);
  return items;
}

export function deleteClient(id) {
  const items = getClients().filter((c) => c.id !== id);
  saveClients(items);
  return items;
}

// Contacts
export function getContacts() {
  return read(KEY_CONTACTS);
}

export function saveContacts(items) {
  write(KEY_CONTACTS, items);
}

export function addContact(contact) {
  const items = getContacts();
  items.unshift(contact);
  saveContacts(items);
  return items;
}

export function deleteContact(id) {
  const items = getContacts().filter((c) => c.id !== id);
  saveContacts(items);
  return items;
}

// Subscribers
export function getSubscribers() {
  return read(KEY_SUBSCRIBERS);
}

export function saveSubscribers(items) {
  write(KEY_SUBSCRIBERS, items);
}

export function addSubscriber(email) {
  const items = getSubscribers();
  const entry = { id: Date.now().toString(), email };
  items.unshift(entry);
  saveSubscribers(items);
  return items;
}

export function deleteSubscriber(id) {
  const items = getSubscribers().filter((s) => s.id !== id);
  saveSubscribers(items);
  return items;
}
