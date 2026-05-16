import axios from 'axios';

const BASE_URL = 'https://mock-backend-hintro.vercel.app';

const api = axios.create({
  baseURL: BASE_URL,
});

export const getProfile = (userId) => {
  return api.get('/api/auth/profile', {
    headers: { 'x-user-id': userId }
  });
};

export const getDashboard = (userId) => {
  return api.get('/api/auth/dashboard', {
    headers: { 'x-user-id': userId }
  });
};

export const getStats = (userId) => {
  return api.get('/api/call-sessions/stats', {
    headers: { 'x-user-id': userId }
  });
};

export const getCallHistory = (userId, limit = 10) => {
  return api.get(`/api/call-sessions?limit=${limit}`, {
    headers: { 'x-user-id': userId }
  });
};

export const fetchDashboardSummary = async (userId) => {
  try {
    const [profileRes, statsRes, historyRes, dashboardRes] = await Promise.all([
      getProfile(userId),
      getStats(userId),
      getCallHistory(userId, 10),
      getDashboard(userId)
    ]);
    return {
      profile: profileRes.data,
      stats: statsRes.data,
      history: historyRes.data.data || historyRes.data,
      subscription: dashboardRes.data
    };
  } catch (error) {
    console.error("Error fetching dashboard data:", error);
    throw error;
  }
};

export default api;
