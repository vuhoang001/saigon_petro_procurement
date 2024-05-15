import axios from 'axios';
import cookie from './cookieService';
const { VITE_APP_API } = import.meta.env;

export class AuthService {
    login(user) {
        const data = {
            Email: user.username,
            Password: user.password
        };
        return axios.post(VITE_APP_API + 'login', data).then((res) => {
            if (res.data) {
                const currentDate = new Date();
                const expireTokenTime = new Date(currentDate.getTime() + res.data['ExpriresIn'] * 60 * 1000).toString();
                const jToken = { ExpireToken: expireTokenTime, ...res.data };
                localStorage.setItem('user', JSON.stringify(jToken));
                cookie.set('user_type', res.data.UserType === 'Buying' ? 'business' : 'supplies', 365);
            }
        });
    }
}
