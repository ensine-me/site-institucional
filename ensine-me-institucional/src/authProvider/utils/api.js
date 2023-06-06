import axios from "axios";

const api = axios.create({
    baseURL: " http://localhost:8080/usuarios",
});


api.interceptors.request.use(async (config) => {
    try {
        const token = localStorage.getItem('token');
        if (token) {
            console.log("CONFIGGGS: ", config)
            console.log("HEADEeeeeeeeeeeeeR autorizeeeee: ", config.headers.Authorization)
            config.headers.Authorization = `Bearer ${token}`;
        }
        console.log("HEADEeeeeeeeeeeeeR: ", config.headers)

        return config;
    } catch (error) {
        console.log("ERRRRRRO ", error)
    }
});

export default api;