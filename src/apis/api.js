import axios from 'axios';
import authHeader from '../service/auth-header';
const API_URL = import.meta.env.VITE_APP_API;

class API {

  async get_all(api) {

    return await axios.get(API_URL + api, { headers: authHeader() });
  }

  get_data(api, data) {

    return axios.get(API_URL + api, { params: data.data, headers: authHeader() });
  }

  add_new_v2(data, api) {

    return axios.post(API_URL + api, data, { headers: authHeader() });
  }

  update_v2(data, api) {

    return axios.put(API_URL + api, data, { headers: authHeader() });
  }

  delete_v2(id, api) {
    return axios.delete(API_URL + api, { headers: authHeader(), data: id });
  }


}

export default new API();