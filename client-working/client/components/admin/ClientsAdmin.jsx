import React, { useState } from "react";
import {
  useClients,
  useCreateClient,
  useDeleteClient,
} from "../../src/hooks/useApi";

export default function ClientsAdmin() {
  const { data: clientsData, isLoading, error } = useClients();
  const createClient = useCreateClient();
  const deleteClient = useDeleteClient();

  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("5");
  const [image, setImage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const clients = clientsData?.data || [];

  async function handleAdd(e) {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const clientData = {
        name,
        designation,
        description,
        rating: Number(rating),
        image: image || "https://via.placeholder.com/150",
        isActive: true,
      };
      await createClient.mutateAsync(clientData);
      setName("");
      setDesignation("");
      setDescription("");
      setRating("5");
      setImage("");
    } catch (err) {
      console.error("Error creating client:", err);
      alert("Error creating client: " + err.message);
    } finally {
      setIsSubmitting(false);
    }
  }

  async function handleDelete(id) {
    if (confirm("Are you sure you want to delete this client?")) {
      try {
        await deleteClient.mutateAsync(id);
      } catch (err) {
        console.error("Error deleting client:", err);
        alert("Error deleting client: " + err.message);
      }
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm uppercase tracking-wide text-slate-500">
          Admin · Clients
        </p>
        <h2 className="text-3xl font-bold text-slate-900">
          Client Testimonials
        </h2>
        <p className="text-sm text-slate-500 mt-1">
          Capture client praise and keep ratings polished.
        </p>
      </div>

      {error && (
        <div className="p-4 mb-2 bg-red-50 border border-red-200 text-red-700 rounded-lg">
          {error.message}
        </div>
      )}

      <form
        onSubmit={handleAdd}
        className="grid gap-3 bg-white p-5 border border-slate-200 rounded-xl shadow-sm"
      >
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className="border border-slate-200 rounded-lg p-3 w-full bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          value={designation}
          onChange={(e) => setDesignation(e.target.value)}
          placeholder="Designation (e.g., Business Owner)"
          className="border border-slate-200 rounded-lg p-3 w-full bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Testimonial/Description"
          className="border border-slate-200 rounded-lg p-3 w-full bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <select
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          className="border border-slate-200 rounded-lg p-3 w-full bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="1">1 Star</option>
          <option value="2">2 Stars</option>
          <option value="3">3 Stars</option>
          <option value="4">4 Stars</option>
          <option value="5">5 Stars</option>
        </select>
        <input
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="Image URL (optional)"
          className="border border-slate-200 rounded-lg p-3 w-full bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-sm hover:bg-blue-500 disabled:opacity-50 transition"
          >
            {isSubmitting ? "Adding..." : "Add Client"}
          </button>
        </div>
      </form>

      {isLoading && <div>Loading clients...</div>}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {clients.length === 0 && <div>No clients yet</div>}
        {clients.map((c) => (
          <div
            key={c._id}
            className="p-5 bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition flex flex-col gap-4 h-full"
          >
            <div className="flex items-center gap-3">
              {c.image && (
                <img
                  src={c.image}
                  alt={c.name}
                  className="w-14 h-14 object-cover rounded-full border border-slate-200"
                />
              )}
              <div className="flex-1">
                <div className="font-semibold text-slate-900 leading-tight">
                  {c.name}
                </div>
                <div className="text-sm text-slate-600">{c.designation}</div>
              </div>
              <span className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-50 text-blue-700">
                {c.rating}★
              </span>
            </div>

            <div className="text-sm text-slate-700 italic bg-slate-50 rounded-lg p-3 leading-relaxed">
              "{c.description}"
            </div>

            <div className="flex justify-end mt-auto">
              <button
                onClick={() => handleDelete(c._id)}
                className="px-3 py-1 text-sm text-red-600 hover:text-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
