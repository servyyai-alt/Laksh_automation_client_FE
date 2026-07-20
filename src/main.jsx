import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "react-hot-toast";
import App from "./App";
import "./index.css";
import SubscriptionGuard from "./components/subscription/SubscriptionGuard";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <SubscriptionGuard>
          <App />
        </SubscriptionGuard>
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: "#0A1628",
              color: "#fff",
              border: "1px solid rgba(0, 119, 255, 0.3)",
              borderRadius: "12px",
            },
            success: {
              iconTheme: { primary: "#00B4D8", secondary: "#fff" },
            },
            error: {
              iconTheme: { primary: "#ff4444", secondary: "#fff" },
            },
          }}
        />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>,
);
