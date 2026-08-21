import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { RefreshCw } from "lucide-react";
import logo from "../../assets/logo.png";
import SubscriptionExpired from "./SubscriptionExpried";
import { getSubscriptionStatus } from "../../utils/subscriptionApi";
import {
  getSubscriptionConfig,
  isSubscriptionAllowed,
  isSubscriptionBlocked,
} from "../../utils/subscription";
import "./SubscriptionExpired.css";

const StatusShell = ({ children }) => (
  <div className="subscription-expired-root min-h-screen flex flex-col items-center justify-center p-6 bg-[#F4FBFF] relative overflow-hidden">
    <div className="bg-blueprint pointer-events-none opacity-40" />
    <div className="subscription-top-logo mb-8 z-10">
      <div className="p-3 sm:p-4 bg-white rounded-2xl border-2 border-[#0077FF] shadow-[0_8px_30px_rgba(0,119,255,0.2)] inline-flex items-center justify-center">
        <img
          src={logo}
          alt="Laksh Automations"
          title="Laksh Automations"
          className="h-20 sm:h-28 w-auto object-contain"
        />
      </div>
    </div>
    <div className="subscription-content z-10">{children}</div>
  </div>
);

const LoadingScreen = () => {
  return (
    <StatusShell>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="flex flex-col items-center w-full max-w-md text-center"
      >
        <div className="mx-auto mb-6 h-12 w-12 animate-spin rounded-full border-4 border-[#0077FF]/20 border-t-[#0077FF] shadow-[0_0_20px_rgba(0,119,255,0.2)]" />

        <h1 className="font-display font-black text-2xl sm:text-3xl text-[#0A1628] tracking-wider mb-2">
          LAKSH AUTOMATIONS
        </h1>

        <p className="text-sm sm:text-base font-semibold text-[#0077FF] tracking-wide">
          Water Automation Specialists
        </p>
      </motion.div>
    </StatusShell>
  );
};

const ErrorScreen = ({ onRetry, message }) => (
  <StatusShell>
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="flex flex-col items-center w-full"
    >
      <div className="connection-lost-badge mb-8">
        <span className="badge-dot" />
        <span className="badge-text">Connection Error</span>
      </div>

      <h1 className="subscription-heading">
        Connection Failed
      </h1>

      <p className="subscription-description">
        Unable to verify system connection with the server.
      </p>

      {message ? (
        <div className="mb-8 rounded-xl border border-red-500/20 bg-[#FFF5F5] px-6 py-4 shadow-sm max-w-lg w-full text-center">
          <p className="text-[15px] font-medium leading-relaxed text-[#EF4444]">
            {message === "Subscription or EMI contract not found" ? "Subscription contract not found" : message}
          </p>
        </div>
      ) : null}

      <button
        type="button"
        onClick={onRetry}
        className="inline-flex items-center gap-2 rounded-xl bg-[#0077FF] px-8 py-3.5 text-[15px] font-semibold text-white shadow-[0_4px_14px_rgba(0,119,255,0.25)] hover:bg-[#0056b3] hover:shadow-[0_6px_20px_rgba(0,119,255,0.3)] hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
      >
        <RefreshCw size={18} />
        Retry Connection
      </button>
    </motion.div>
  </StatusShell>
);

const SubscriptionGuard = ({ children }) => {
  const { error: configError } = getSubscriptionConfig();

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [requestError, setRequestError] = useState(null);

  const fetchStatus = async () => {
    try {
      setLoading(true);

      const response = await getSubscriptionStatus();

      setData(response);
      setRequestError(null);
    } catch (err) {
      setRequestError(
        err?.response?.data?.message ||
          err?.message ||
          "Subscription validation failed."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStatus();

    const interval = setInterval(() => {
      fetchStatus();
    }, 15 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  if (configError || requestError || !data?.subscriptionStatus) {
    return (
      <ErrorScreen
        onRetry={fetchStatus}
        message={configError || requestError}
      />
    );
  }

  if (isSubscriptionBlocked(data.subscriptionStatus)) {
    return (
      <SubscriptionExpired status={data.subscriptionStatus} />
    );
  }

  if (!isSubscriptionAllowed(data.subscriptionStatus)) {
    return (
      <ErrorScreen
        onRetry={fetchStatus}
        message={`Unsupported subscription status: ${data.subscriptionStatus}`}
      />
    );
  }

  return children;
};

export default SubscriptionGuard;
