import $api from '../http/index';

const AuthService = {
    authenticate: async (credentials) => {
        console.log(credentials)
        return $api.post('/auth/authenticate', credentials );
    },

    // register: async (... , ...) => {
    //     return $api.post('/auth/register', { ... , ... , ... });
    // },
};

export default AuthService;