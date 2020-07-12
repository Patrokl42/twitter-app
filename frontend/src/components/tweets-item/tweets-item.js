import React from 'react';
import T from 'prop-types';

import './tweets-item.css';

const TweetsListItem = ({ tweet }) => {
    return (
        <li className="tweets-list-item">
            <img className='tweets-list-item__logo' src={tweet.user.profile_image_url} alt='logo'/>
            <div className='tweets-list-item__text'>
                <h2 className='tweets-list-item__author'>{tweet.user.name}</h2>
                <p>{tweet.text}</p>
                <div>
                    <small className='tweets-list-item__date'>{tweet.created_at.replace(/\B\+\S+/, '')}</small>
                </div>
            </div>
        </li>
    );
}

export default TweetsListItem;

TweetsListItem.propTypes = {
    tweet: T.shape({
        user: T.shape({
            profile_image_url: T.string,
            name: T.string.isRequired,
        }),
        text: T.string.isRequired,
        created_at: T.string.isRequired,
    })
};
