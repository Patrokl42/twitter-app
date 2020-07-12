import React, { Component } from 'react';

import './error-boundry.css'

export default class ErrorBoundry extends Component {
    state = {
        error: false
    };

    componentDidCatch() {
        this.setState({ error: true });
    };

    render() {
        if(this.state.error) {
            return <div className='error-message'>Something went wrong</div>
        }
        return (
            this.props.children
        );
    }
};