import AuthService from '../services/LoginService.js';
import ERROR from '../helpers/StatusCode.json';

const user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { status: { loggedIn: true }, user } : { status: { loggedIn: false }, user: null };

export const auth = {
    namespaced: true,
    state: initialState,
    actions: {
        login({ commit }, user) {
            return AuthService.login(user).then(
                (user) => {
                    commit('loginSuccess', user);
                    return Promise.resolve(user);
                },
                (error) => {
                    commit('loginFailure');
                    let mes = ERROR.find((val) => val.code === error.response.data.status)?.mes;
                    if (error.response.status == 404) mes = 'Mật khẩu không chính xác';
                    return Promise.reject(mes);
                }
            );
        },
        logout({ commit }) {
            AuthService.logout();
            commit('logout');
        },
        register({ commit }, user) {
            return AuthService.register(user).then(
                (response) => {
                    commit('registerSuccess');
                    return Promise.resolve(response.data);
                },
                (error) => {
                    commit('registerFailure');
                    return Promise.reject(error);
                }
            );
        }
    },
    mutations: {
        loginSuccess(state, user) {
            state.status.loggedIn = true;
            state.user = user;
        },
        loginFailure(state) {
            state.status.loggedIn = false;
            state.user = null;
        },
        logout(state) {
            state.status.loggedIn = false;
            state.user = null;
        },
        registerSuccess(state) {
            state.status.loggedIn = false;
        },
        registerFailure(state) {
            state.status.loggedIn = false;
        }
    }
};
