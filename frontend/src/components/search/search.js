import React, { useContext, useEffect, useState } from 'react';
import { searchTweets } from '../../actions/tweets';
import { useHistory } from "react-router-dom";
import { useDebounce } from "../../hooks/useDebounce";

import './search.css';
import { connect } from "react-redux";

const Search = ({ searchTweets }) => {
    const [searchTerm, setSearchTerm] = useState('');
    let history = useHistory();
    const debouncedSearchTerm = useDebounce(searchTerm, 500);

    function setUrl(text) {
        const url = '/search/?q=' + encodeURI(text);

        history.push(url);
    }

    const onChange = term => {
        setSearchTerm(term);
        setUrl(term);
        debouncedSearchTerm.replace(/\s/g, '').length && searchTweets(debouncedSearchTerm)
    }

    useEffect(
        () => {
            if (debouncedSearchTerm) {
                onChange(debouncedSearchTerm)
            } else {
                setSearchTerm(debouncedSearchTerm);
            }
        },
        [debouncedSearchTerm]
    );

    return (
        <form className='search'>
            <input
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="search__input"
                placeholder='Search'/>
        </form>
    )
};

const mapStateToProps = (state) => ({
    tweets: state.tweets
});

export default connect(mapStateToProps, { searchTweets })(Search);