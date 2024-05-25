// import axios from 'axios';
// import cookie from '../helpers/cookies.helper';

export default function auth({ next, router }) {
    if (!localStorage.getItem('user')) {
        return router.push({ name: 'login' });
    } else {
        try {
            const user = localStorage.getItem('user');
            console.log(user);
            const expireDate = new Date(user['ExpireToken']);
            console.log(expireDate);
            return next();
        } catch (ex) {
            return router.push({ name: 'login' });
        }
    }
}
