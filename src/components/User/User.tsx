import React, { useState } from "react";

type Status = "idle" | "loading" | "error";

export function LoadingComponent() {
  const [status, setStatus] = useState<Status>("idle");

  const loadData = async () => {
    setStatus("loading");
    try {
      setStatus("idle");
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div>
      <p>Status: {status}</p>
      <button onClick={loadData}>Load Data</button>
    </div>
  );
}
