import axios from 'axios';
import constants from '../constants';

const networkClient = {
    get(url, params, headers, success, failure) {
        return this.request({
            method: 'get',
            url,
            params,
            headers,
            success,
            failure,
        });
    },
    post(url, data, success, failure) {
        return this.request({
            method: 'post',
            url,
            data,
            success,
            failure,
        });
    },
    put(url, data, success, failure) {
        return this.request({
            method: 'put',
            url,
            data,
            success,
            failure,
        });
    },
    delete(url, success, failure) {
        return this.request({
            method: 'delete',
            url,
            success,
            failure,
        });
    },

    request: (options = {}) => {
        if (!options.url) {
            console.log('URL is required');
            return;
        }

        const data = Object.assign({
            method: 'get',
            baseURL: constants.baseUrl,
        }, options);

        data.headers = Object.assign({}, options.headers, {'x-rapidapi-key': constants.apiKey, 'x-rapidapi-host': constants.host});

        return new Promise((resolve, reject) => {
            axios(data)
            .then((response) => {
                if (options.success) {
                    options.success(response.data);
                }
                resolve(response.data);
            })
            .catch((error) => {
                if (options.failure) {
                    options.failure(error);
                }
                reject(error);
            });

        })

    },
};

export default networkClient;