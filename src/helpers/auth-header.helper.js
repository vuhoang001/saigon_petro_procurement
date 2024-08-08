export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user['access-token']) {
        return { Authorization: 'Bearer ' + user['access-token'] };
    } else {
        return {};
    }
}
