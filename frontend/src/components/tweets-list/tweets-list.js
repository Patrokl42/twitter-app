import React, { useState, useEffect } from 'react';
import T from 'prop-types';
import { connect } from 'react-redux';

import TweetsListItem from "../tweets-item/tweets-item";
import { getTweets } from '../../actions/tweets';

import './tweets-list.css'

const TweetsList = ({ getTweets, tweets: { tweets } }) => {
    useEffect(() => {
        getTweets();
    }, [getTweets]);

    return (
        <ul className="tweets-list">
            {tweets.map(tweet => (
                <TweetsListItem
                    key={tweet.id}
                    tweet={tweet}
                />
            ))}
        </ul>
    )
};

const mapStateToProps = (state) => ({
    tweets: state.tweets
});

export default connect(mapStateToProps, { getTweets })(TweetsList);

TweetsList.propTypes = {
    tweets: T.object.isRequired,
    getTweets: T.func,
};
