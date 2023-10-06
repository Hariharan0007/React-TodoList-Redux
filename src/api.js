import axios from 'axios';

const api = axios.create({
    baseURL:"/api",
    headers:{
        "Content-Type":"Application/JSON"
    }
});

export default api; 