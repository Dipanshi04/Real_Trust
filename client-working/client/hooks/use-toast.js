import React from "react";

// Minimal toast/stub API — no UI dependency.
// Provides `useToast()` and `toast()` with noop implementations.

let listeners = [];
let memoryState = { toasts: [] };

function dispatch() {
  listeners.forEach((l) => l(memoryState));
}

function toast(message = "") {
  // lightweight console-based fallback
  console.log("toast:", message);
  return {
    id: Date.now().toString(),
    dismiss: () => {},
    update: () => {},
  };
}

function useToast() {
  const [state, setState] = React.useState(memoryState);

  React.useEffect(() => {
    listeners.push(setState);
    return () => {
      const idx = listeners.indexOf(setState);
      if (idx !== -1) listeners.splice(idx, 1);
    };
  }, []);

  return {
    ...state,
    toast,
    dismiss: () => {},
  };
}

export { useToast, toast };
