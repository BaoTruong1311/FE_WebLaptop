import http, { setAuthToken } from "./http-common";

const register = (user) => {
    return http.post(`/auth/register`, user);
};

const login = (username, password) => {
    return http.post(`/auth/login`, { username, password }).then((response) => {
        if (response.data.token) {
            localStorage.setItem(`user1`, JSON.stringify(response.data));
            setAuthToken(response.data.token)
        }
        return response.data;

    });
};

const logout = () => {
    localStorage.removeItem("user1");
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem(`user1`));
};

const AuthService = {
    register,
    getCurrentUser,
    login,
    logout

};

export default AuthService;
