import axios from 'axios';

const _apiBase = '/api';

const getResourse = (url) => {
    return `${_apiBase}${url}`
};

export const Tweets = {
    getTweets() {
        return axios.get(getResourse(`/twitter`))
    },

    searchTweets(searchTerm) {
        return axios.get(getResourse(`/twitter/search?query=/${searchTerm}`))
    }
};