import axios from 'axios';
import cookie from '../helpers/cookies.helper';
const { VITE_APP_API } = import.meta.env;

class AuthService {
    login(user) {
        const data = {
            username: user.username,
            password: user.password
        };
        return axios.post(VITE_APP_API + 'auth/login', data).then((res) => {
            if (res.data) {
                const currentDate = new Date();
                const expireTokenTime = new Date(currentDate.getTime() + res.data['ExpiresIn'] * 60 * 1000).toString();
                const jToken = { ExpireToken: expireTokenTime, ...res.data };
                localStorage.setItem('user', JSON.stringify(jToken));
                cookie.set('user_type', res.data.UserType === 'Buying' ? 'business' : 'supplies', 365);
            }
        });
    }

    logout() {
        localStorage.removeItem('user');
        cookie.clear('user_type');
    }
}

export default new AuthService();
