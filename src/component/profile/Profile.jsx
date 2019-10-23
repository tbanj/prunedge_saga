import React, { Component } from 'react';
import { connect } from 'react-redux';
class Profile extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <div className="container">
                    {this.props.storeduUsers.jobTitle}
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        storeduUsers: state.users
    }
}
export default connect(mapStateToProps)(Profile);