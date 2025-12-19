import React, { useState } from "react";
import {
  useContacts,
  useDeleteContact,
  useUpdateContact,
} from "../../src/hooks/useApi";

export default function ContactsAdmin() {
  const { data: contactsData, isLoading, error } = useContacts();
  const deleteContact = useDeleteContact();
  const updateContact = useUpdateContact();

  const [statusFilter, setStatusFilter] = useState("all");

  const contacts = contactsData?.data || [];
  const filteredContacts =
    statusFilter === "all"
      ? contacts
      : contacts.filter((c) => c.status === statusFilter);

  async function handleDelete(id) {
    if (confirm("Are you sure you want to delete this contact?")) {
      try {
        await deleteContact.mutateAsync(id);
      } catch (err) {
        console.error("Error deleting contact:", err);
        alert("Error deleting contact: " + err.message);
      }
    }
  }

  async function handleMarkAsRead(id) {
    try {
      await updateContact.mutateAsync({ id, data: { status: "read" } });
    } catch (err) {
      console.error("Error updating contact:", err);
      alert("Error updating contact: " + err.message);
    }
  }

  async function handleMarkAsResponded(id) {
    try {
      await updateContact.mutateAsync({ id, data: { status: "resolved" } });
    } catch (err) {
      console.error("Error updating contact:", err);
      alert("Error updating contact: " + err.message);
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm uppercase tracking-wide text-slate-500">
          Admin · Contacts
        </p>
        <h2 className="text-3xl font-bold text-slate-900">Contact Messages</h2>
        <p className="text-sm text-slate-500 mt-1">
          Manage inbound requests and triage status quickly.
        </p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 space-y-4">
        {error && (
          <div className="bg-red-100 text-red-700 p-4 rounded mb-4">
            {error.message}
          </div>
        )}

        <div className="flex flex-wrap gap-3 items-center">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-2 border border-slate-200 rounded-lg bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Messages</option>
            <option value="new">New</option>
            <option value="read">Read</option>
            <option value="contacted">Contacted</option>
            <option value="resolved">Resolved</option>
          </select>
        </div>

        {isLoading && <p className="text-gray-500">Loading contacts...</p>}

        <div className="space-y-4">
          {filteredContacts.length === 0 ? (
            <p className="text-gray-500">No messages found</p>
          ) : (
            filteredContacts.map((contact) => (
              <div
                key={contact._id}
                className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition"
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="font-bold text-lg">{contact.fullName}</p>
                    <p className="text-gray-600 text-sm">{contact.email}</p>
                    <p className="text-gray-600 text-sm">
                      {contact.mobile || contact.phone}
                    </p>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      contact.status === "new"
                        ? "bg-yellow-100 text-yellow-800"
                        : contact.status === "read"
                        ? "bg-blue-100 text-blue-800"
                        : contact.status === "contacted"
                        ? "bg-purple-100 text-purple-800"
                        : "bg-green-100 text-green-800"
                    }`}
                  >
                    {contact.status}
                  </span>
                </div>
                <p className="text-gray-700 mb-4 p-3 bg-slate-50 rounded-lg">
                  {contact.message}
                </p>
                <div className="flex gap-2">
                  {contact.status === "new" && (
                    <button
                      onClick={() => handleMarkAsRead(contact._id)}
                      disabled={updateContact.isPending}
                      className="px-3 py-1 bg-blue-600 text-white rounded text-sm disabled:opacity-50 hover:bg-blue-500"
                    >
                      Mark as Read
                    </button>
                  )}
                  {contact.status === "read" && (
                    <button
                      onClick={() => handleMarkAsResponded(contact._id)}
                      disabled={updateContact.isPending}
                      className="px-3 py-1 bg-green-600 text-white rounded text-sm disabled:opacity-50 hover:bg-green-500"
                    >
                      Mark as Resolved
                    </button>
                  )}
                  <button
                    onClick={() => handleDelete(contact._id)}
                    disabled={deleteContact.isPending}
                    className="px-3 py-1 bg-red-600 text-white rounded text-sm disabled:opacity-50 hover:bg-red-500"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
