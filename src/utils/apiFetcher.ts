import axios from 'axios';
import { toast } from 'react-toastify';

class ApiFetcher {
  get(endpoint: string, token: string) {
    return this.makeRequest('get', endpoint, {}, token)
  };

  post(endpoint: string, body: object, token?: string) {
    return this.makeRequest('post', endpoint, body, token)
  };

  put(endpoint: string, token: string) {
    return this.makeRequest('put', endpoint, {}, token)
  };

  makeRequest(method: any, endpoint: string, data: object, token?: string) {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };

    return axios
      .request({ url: endpoint, method, headers, data })
      .then((res) => res)
      .catch((error) => {
        let errorMessage;
        if (error.response.data.statusCode === 400) errorMessage = 'content must be a string and should not be empty';
        if (error.response.data.statusCode === 401) errorMessage = 'Unauthorized';
        if (error.response.data.statusCode === 404) errorMessage = "The call does not exist!";
        toast.error(errorMessage);
      });
  }
}

export default new ApiFetcher();
