import React, { useState } from "react";
import {
  useProjects,
  useCreateProject,
  useDeleteProject,
  useUpdateProject,
} from "../../src/hooks/useApi";

export default function ProjectsAdmin() {
  const { data: projectsData, isLoading, error } = useProjects();
  const createProject = useCreateProject();
  const deleteProject = useDeleteProject();

  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [area, setArea] = useState("");
  const [image, setImage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [editingImageId, setEditingImageId] = useState(null);
  const [editingImageUrl, setEditingImageUrl] = useState("");

  const projects = projectsData?.data || [];
  const totalProjects = projects.length;

  async function handleAdd(e) {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const projectData = {
        name,
        description: desc,
        image: image || "https://via.placeholder.com/400",
        location,
        price: price ? Number(price) : 0,
        bedrooms: bedrooms ? Number(bedrooms) : 0,
        bathrooms: bathrooms ? Number(bathrooms) : 0,
        area: area ? Number(area) : 0,
        status: "available",
        features: [],
        isActive: true,
      };
      await createProject.mutateAsync(projectData);
      setName("");
      setDesc("");
      setLocation("");
      setPrice("");
      setBedrooms("");
      setBathrooms("");
      setArea("");
      setImage("");
    } catch (err) {
      console.error("Error creating project:", err);
      alert("Error creating project: " + err.message);
    } finally {
      setIsSubmitting(false);
    }
  }

  async function handleDelete(id) {
    if (confirm("Are you sure you want to delete this project?")) {
      try {
        await deleteProject.mutateAsync(id);
      } catch (err) {
        console.error("Error deleting project:", err);
        alert("Error deleting project: " + err.message);
      }
    }
  }

  const updateProject = useUpdateProject();

  function handleStartEdit(p) {
    setEditingImageId(p._id);
    setEditingImageUrl(p.image || "");
  }

  function handleCancelEdit() {
    setEditingImageId(null);
    setEditingImageUrl("");
  }

  async function handleSaveImage() {
    if (!editingImageId) return;
    try {
      await updateProject.mutateAsync({
        id: editingImageId,
        data: { image: editingImageUrl.trim() },
      });
      setEditingImageId(null);
      setEditingImageUrl("");
    } catch (err) {
      console.error("Error updating image:", err);
      alert("Error updating image: " + err.message);
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm uppercase tracking-wide text-slate-500">
            Admin · Projects
          </p>
          <h2 className="text-3xl font-bold text-slate-900">
            Project Management
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            Create, review and manage all listings from one place.
          </p>
        </div>
      </div>

      {error && (
        <div className="p-4 mb-2 bg-red-50 border border-red-200 text-red-700 rounded-lg">
          {error.message}
        </div>
      )}

      <form
        onSubmit={handleAdd}
        className="grid gap-4 bg-white p-5 border border-slate-200 rounded-xl shadow-sm"
      >
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Project name"
          className="border border-slate-200 rounded-lg p-3 w-full bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <textarea
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          placeholder="Description"
          className="border border-slate-200 rounded-lg p-3 w-full bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Location"
          className="border border-slate-200 rounded-lg p-3 w-full bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Price"
            className="border border-slate-200 rounded-lg p-3 w-full bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder="Image URL"
            className="border border-slate-200 rounded-lg p-3 w-full bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <input
            type="number"
            value={bedrooms}
            onChange={(e) => setBedrooms(e.target.value)}
            placeholder="Bedrooms"
            className="border border-slate-200 rounded-lg p-3 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="number"
            value={bathrooms}
            onChange={(e) => setBathrooms(e.target.value)}
            placeholder="Bathrooms"
            className="border border-slate-200 rounded-lg p-3 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="number"
            value={area}
            onChange={(e) => setArea(e.target.value)}
            placeholder="Area (sq ft)"
            className="border border-slate-200 rounded-lg p-3 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex items-center gap-3">
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-sm hover:bg-blue-500 disabled:opacity-50 transition"
          >
            {isSubmitting ? "Adding..." : "Add Project"}
          </button>
          <span className="text-sm text-slate-500">
            {totalProjects} projects
          </span>
        </div>
      </form>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <p className="text-sm text-slate-600">Showing all projects</p>
          {isLoading && (
            <div className="text-sm text-slate-500">Loading projects...</div>
          )}
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.length === 0 && <div>No projects yet</div>}
          {projects.map((p) => (
            <div
              key={p._id}
              className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition flex flex-col gap-3 h-full"
            >
              <div className="relative h-44 rounded-lg overflow-hidden bg-slate-100 flex items-center justify-center">
                {p.image ? (
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-slate-400 text-sm">No image</span>
                )}
              </div>
              {editingImageId === p._id ? (
                <div className="flex items-center gap-2">
                  <input
                    value={editingImageUrl}
                    onChange={(e) => setEditingImageUrl(e.target.value)}
                    placeholder="New image URL"
                    className="flex-1 px-3 py-2 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    onClick={handleSaveImage}
                    className="px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-500"
                  >
                    Save
                  </button>
                  <button
                    onClick={handleCancelEdit}
                    className="px-3 py-2 border border-slate-300 rounded text-slate-700 hover:bg-slate-50"
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <div className="flex justify-end">
                  <button
                    onClick={() => handleStartEdit(p)}
                    className="text-blue-600 text-sm hover:text-blue-500"
                  >
                    Change Image
                  </button>
                </div>
              )}
              <div className="flex items-center justify-between">
                <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  {p.status || "available"}
                </div>
                {p.location && (
                  <div className="text-xs text-slate-500 flex items-center gap-1">
                    <span>📍</span>
                    <span>{p.location}</span>
                  </div>
                )}
              </div>
              <div>
                <div className="font-semibold text-lg text-slate-900">
                  {p.name}
                </div>
                <div className="text-sm text-slate-600 mt-1 line-clamp-2">
                  {p.description}
                </div>
              </div>
              {(p.price || p.bedrooms || p.bathrooms || p.area) && (
                <div className="flex flex-wrap gap-2 text-sm text-slate-700">
                  {p.price && (
                    <span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-50 text-blue-700 rounded-full">
                      ${p.price.toLocaleString()}
                    </span>
                  )}
                  {p.bedrooms && (
                    <span className="inline-flex items-center gap-1 px-2 py-1 bg-slate-100 text-slate-700 rounded-full">
                      {p.bedrooms} bed
                    </span>
                  )}
                  {p.bathrooms && (
                    <span className="inline-flex items-center gap-1 px-2 py-1 bg-slate-100 text-slate-700 rounded-full">
                      {p.bathrooms} bath
                    </span>
                  )}
                  {p.area && (
                    <span className="inline-flex items-center gap-1 px-2 py-1 bg-slate-100 text-slate-700 rounded-full">
                      {p.area} sq ft
                    </span>
                  )}
                </div>
              )}
              <div className="flex justify-end mt-auto">
                <button
                  onClick={() => handleDelete(p._id)}
                  className="text-red-600 text-sm hover:text-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
