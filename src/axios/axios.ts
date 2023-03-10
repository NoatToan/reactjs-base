import axios from 'axios';

const axiosClient = axios.create({
  // baseURL: EEnvType.API_URL,
  timeout: 60000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosClient;
