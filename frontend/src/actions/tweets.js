import { twitterApi } from '../api';
import { GET_TWEETS, SEARCH_TWEETS, GET_TWEETS_ERROR } from './types';

export const getTweets = () => async dispatch => {
    try {
        const res = await twitterApi.Tweets.getTweets();

        dispatch({
            type: GET_TWEETS,
            payload: res.data.msg
        });
    } catch (err) {
        dispatch({
            type: GET_TWEETS_ERROR,
            payload: { error: true }
        });
    }
};

export const searchTweets = (searchTerm) => async dispatch => {
    try {
        const res = await twitterApi.Tweets.searchTweets(searchTerm);

        dispatch({
            type: SEARCH_TWEETS,
            payload: {data: res.data.msg.statuses, searchTerm}
        });
    } catch (err) {
        dispatch({
            type: GET_TWEETS_ERROR,
            payload: { error: true }
        });
    }
};