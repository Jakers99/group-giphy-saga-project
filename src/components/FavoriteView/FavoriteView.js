import React, { Component } from 'react';
import { connect } from 'react-redux';

class FavoriteView extends Component {
    render() {
        return (
            <div></div>
        )
    }
}

const store = reduxState => ({
    reduxState
})

export default connect(store)(FavoriteView);