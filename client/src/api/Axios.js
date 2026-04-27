import axios from "axios";

const instance = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_API,
});

export const Axios = {
    getUsersData: () => instance.get("/api/users"),
    addUserData: (data) => instance.post("/api/users", data),
};
