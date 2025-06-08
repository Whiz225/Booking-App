import axios from "axios";

const axiosInstance = axios.create({
  // ✅ Make sure it's localhost not 127.0.0.1
  // baseURL: "https://booking-app-api.onrender.com/api/v1",
  baseURL: "https://booking-app-api-tp56.onrender.com",
  // ✅ Needed for sending cookies
  withCredentials: true,
});

export default axiosInstance;
