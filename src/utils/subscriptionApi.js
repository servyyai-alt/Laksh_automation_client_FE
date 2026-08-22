import {
  getSubscriptionConfig,
  normalizeSubscriptionStatus,
} from "../utils/subscription";

export const getSubscriptionStatus = async () => {
  const { webbyApiUrl, subscriptionId, error } = getSubscriptionConfig();

  if (error) {
    throw new Error(error);
  }

  const response = await fetch(
    `${webbyApiUrl}/api/sites/${subscriptionId}/status`
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data?.message || response.statusText || "Request failed");
  }

  return {
    ...data,
    subscriptionStatus: normalizeSubscriptionStatus(
      data.subscriptionStatus
    ),
  };
};
