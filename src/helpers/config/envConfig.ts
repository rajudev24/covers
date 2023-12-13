export const getBaseUrl = (): string => {
  return process.env.API_BASE_URL || "https://api.standups7.com/api";
};
