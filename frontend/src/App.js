import React, {useState, useEffect} from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import Search from "./components/search/search";
import TweetsList from "./components/tweets-list/tweets-list";
import ErrorBoundry from "./components/error-boundry/error-boundry";

import './App.css';
import { searchTweets } from "./actions/tweets";

function App({error, searchTweets}) {
    let history = useHistory();
    console.log(error);

    useEffect(() => {
        getSearchFromUrl(history.location.search.substr(3));
    });

    function getSearchFromUrl(url) {
        const term = decodeURI(url);
        term !== '' && searchTweets(term);
    }

    function layout() {
        return (
            <>
                <h1 className="title">Twiter search</h1>
                <Search/>
                <ErrorBoundry>
                    <TweetsList/>
                </ErrorBoundry>
            </>
        )
    }

    return (
        <div className="App">
            <>
                { error
                    ? <h1 className='error-message'> It seems someone turned off the internet </h1>
                    : layout()
                }
            </>
        </div>
    );
}

const mapStateToProps = (state) => ({
    error: state.tweets.error
});

export default connect(mapStateToProps, { searchTweets })(App);