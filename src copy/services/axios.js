
import axios from "axios";

const axiosInstance = axios.create({
    // ✅ Make sure it's localhost not 127.0.0.1
  baseURL: "http://localhost:8000/api/v1", 
  // ✅ Needed for sending cookies
  withCredentials: true, 
});

export default axiosInstance;