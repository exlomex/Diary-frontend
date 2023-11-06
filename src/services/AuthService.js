import $api from '../http/index';
import axios from "axios";

const AuthService = {
    authenticate: async (credentials) => {
        console.log(credentials)
        return axios.post('http://localhost:8080/diary/api/v1/auth/authenticate', credentials );
    },

    // register: async (... , ...) => {
    //     return $api.post('/auth/register', { ... , ... , ... });
    // },
};

export default AuthService;