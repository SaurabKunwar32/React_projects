import React from "react";

export default function signIN({ isOpen, OnClose }) {
  if (!isOpen) {
    return null;
  }
  return (
    <div
      onClick={OnClose}
      style={{
        position: "fixed",
        inset: "0",
        background: "rgba(0, 0, 0, 0.4)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "white",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          maxWidth: "600px",
          width: "100%",
          padding: "16px",
        }}
      >
        {/* Modal Header */}
        <div
          style={{
            fontSize: "1.25rem",
            fontWeight: "bold",
            marginBottom: "16px",
          }}
        >
          Sign In
        </div>

        {/* Modal Body */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "16px",
            margin: "16px 0",
          }}
        >
          <input
            type="text"
            placeholder="Username"
            style={{
              flexGrow: 1,
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              fontSize: "1rem",
            }}
          />
          <input
            type="password"
            placeholder="Password"
            style={{
              flexGrow: 1,
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              fontSize: "1rem",
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: "16px",
          }}
        >
          <button
            onClick={OnClose}
            style={{
              padding: "8px 16px",
              fontWeight: "600",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              background: "#e0e0e0",
              color: "#333",
            }}
            onMouseOver={(e) => (e.target.style.background = "#d6d6d6")}
            onMouseOut={(e) => (e.target.style.background = "#e0e0e0")}
            onMouseDown={(e) => (e.target.style.background = "#cccccc")}
          >
            Cancel
          </button>
          <button
            style={{
              padding: "8px 16px",
              fontWeight: "600",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              background: "#4da3ff",
              color: "white",
            }}
            onMouseOver={(e) => (e.target.style.background = "#368eef")}
            onMouseOut={(e) => (e.target.style.background = "#4da3ff")}
            onMouseDown={(e) => (e.target.style.background = "#2c79c2")}
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}
