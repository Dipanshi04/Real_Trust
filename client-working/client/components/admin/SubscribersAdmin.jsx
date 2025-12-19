import React, { useState } from "react";
import {
  useSubscribers,
  useCreateSubscriber,
  useDeleteSubscriber,
} from "../../src/hooks/useApi";

export default function SubscribersAdmin() {
  const { data: subscribersData, isLoading, error } = useSubscribers();
  const createSubscriber = useCreateSubscriber();
  const deleteSubscriber = useDeleteSubscriber();

  const [email, setEmail] = useState("");

  const subscribers = subscribersData?.data || [];

  async function handleAddSubscriber(e) {
    e.preventDefault();
    if (!email.trim()) {
      alert("Please enter an email");
      return;
    }
    try {
      await createSubscriber.mutateAsync({ email: email.trim() });
      setEmail("");
    } catch (err) {
      console.error("Error adding subscriber:", err);
      alert("Error adding subscriber: " + err.message);
    }
  }

  async function handleDelete(id) {
    if (confirm("Are you sure you want to unsubscribe this email?")) {
      try {
        await deleteSubscriber.mutateAsync(id);
      } catch (err) {
        console.error("Error deleting subscriber:", err);
        alert("Error deleting subscriber: " + err.message);
      }
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm uppercase tracking-wide text-slate-500">
          Admin · Subscribers
        </p>
        <h2 className="text-3xl font-bold text-slate-900">Email Subscribers</h2>
        <p className="text-sm text-slate-500 mt-1">
          Manage newsletter signups and removals.
        </p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 space-y-4">
        {error && (
          <div className="bg-red-100 text-red-700 p-4 rounded mb-4">
            {error.message}
          </div>
        )}

        <form
          onSubmit={handleAddSubscriber}
          className="mb-6 p-4 bg-white rounded-lg border border-slate-200"
        >
          <div className="flex gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email address"
              disabled={createSubscriber.isPending}
              className="flex-1 px-4 py-2 border border-slate-300 rounded bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50"
              required
            />
            <button
              type="submit"
              disabled={createSubscriber.isPending}
              className="px-6 py-2 bg-primary text-primary-foreground rounded font-semibold disabled:opacity-50 hover:bg-primary/90"
            >
              {createSubscriber.isPending ? "Adding..." : "Add Subscriber"}
            </button>
          </div>
        </form>

        {isLoading && <p className="text-gray-500">Loading subscribers...</p>}

        <div className="space-y-2">
          {subscribers.length === 0 ? (
            <p className="text-gray-500">No subscribers yet</p>
          ) : (
            subscribers.map((subscriber) => (
              <div
                key={subscriber._id}
                className="flex justify-between items-center p-4 bg-white rounded-xl border border-slate-200 shadow-sm"
              >
                <div>
                  <p className="font-semibold">{subscriber.email}</p>
                  <p className="text-gray-500 text-sm">
                    Subscribed:{" "}
                    {new Date(subscriber.subscriptionDate).toLocaleDateString()}
                  </p>
                </div>
                <button
                  onClick={() => handleDelete(subscriber._id)}
                  disabled={deleteSubscriber.isPending}
                  className="px-3 py-1 bg-red-600 text-white rounded text-sm disabled:opacity-50 hover:bg-red-500"
                >
                  Remove
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
