import React, { Component } from 'react';
import { connect } from 'react-redux';
class Profile extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <div className="container">
                    {this.props.users.email}
                </div>
            </React.Fragment>
        );
    }
}

// const mapStateToProps =()=>{
//     return{
//         storeduUsers:
//     }
// }
// export default connect(mapStateToProps)(Profile);
export default Profile;