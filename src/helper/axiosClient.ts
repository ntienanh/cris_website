import axios from 'axios';

// Tạo một instance của axios
const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/',
  headers: {
    'Content-Type': 'application/json',
  },
  // withCredentials: true, // Nếu backend yêu cầu cookies/token
});

// Interceptor: Tự động thêm Authorization token nếu có
axiosClient.interceptors.request.use(
  config => {
    return config;
  },
  error => Promise.reject(error),
);

// Interceptor: Xử lý response hoặc lỗi global
axiosClient.interceptors.response.use(
  response => response,
  error => {
    console.error('API Error:', error);
    return Promise.reject(error);
  },
);

export default axiosClient;
