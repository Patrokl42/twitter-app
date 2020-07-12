import {
    GET_TWEETS,
    SEARCH_TWEETS,
    GET_TWEETS_ERROR
} from '../actions/types';

const initialState = {
    tweets: [],
    searchTerm: '',
    error: false
};

export default function(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case GET_TWEETS:
            return {
                ...state,
                tweets: payload,
                loading: false
            };
        case SEARCH_TWEETS:
            return {
                ...state,
                tweets: payload.data,
                searchTerm: payload.searchTerm
            };
        case GET_TWEETS_ERROR:
            return {
                ...state,
                error: payload.error
            };
        default:
            return state;
    }
}