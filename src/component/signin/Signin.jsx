import React, { Component } from 'react';
import { toast } from 'react-toastify';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/action.js';
import Storage from '../../service/Storage.js';
import MultiForm from '../template/MultiForm';

const data = new Storage();


class Signin extends Component {
    constructor(props) {
        super(props);
        this.state = { user: { email: "", password: "" } };

    }

    fromServer(user) {
        const serverData = data.getItemsFromStorage();
        if (serverData.email !== user.email || serverData.password !== user.password) {
            toast.error("invalid email or password");
            return;
        }
        // this.props.onLoginUser(serverData);
        debugger;
        console.log(user, serverData)

        window.location = '/profile';
    }
    render() {
        return (
            <React.Fragment>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 py-5 mt-5">

                            <div className="container">
                                <h1 className="pl-3">Welcome back</h1>
                                <p className="col-md-8 pt-3">EDMS is an intelligent document management solution that helps you you
                                 bring all of your documents into one place—quickly, easily and securely.
                                    </p>
                                <div className="pl-3 pt-3">
                                    <img className="img-fluid" src="/images/welcome_back.png" alt="join workspace" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6" style={{ backgroundColor: '#F6F9FF' }}>
                            <div>{this.props.users.email}</div>
                            <div className="container my-5">
                                <div className="row ">
                                    <div className="col-md-10 offset-md-1">
                                        <div className="row shadow-sm py-5 bg-white">
                                            <div className="col-md-10 offset-md-1">
                                                <MultiForm wrappedComponentRef={(form) => this.form = form}
                                                    ref={this.child} checkUrl={this.props.history.location.pathname}
                                                    fromServer={this.fromServer} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </React.Fragment>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLoginUser: (val) => dispatch({ type: actionTypes.LOGIN_USER, resultEld: { fullName: val.fullName, jobTitle: val.jobTitle } })
    }
}

// export default connect(null, mapDispatchToProps)(Signin);
export default Signin;

