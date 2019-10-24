import React, { Component } from 'react';
import { toast } from 'react-toastify';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actionTypes from '../../store/action';
import { getUsers, storeUser } from "../../service/dataService.js";
import MultiForm from '../template/MultiForm';

import Storage from '../../service/Storage';

import 'antd/dist/antd.css';
// import './antform.css';
const data = new Storage();

class Signup extends Component {

    constructor(props) {
        super(props)
        this.state = {};
        this.child = React.createRef();

    }
    getData() {
        getUsers().then(resp => resp.json()).then((body) => {
            if (body) { toast.success("data retrieved successfully"); }
        }, (error) => {
            if (error.response && error.response.status === 422) { toast.error(error.response.data.body.message); }
            else { console.error(error); toast.error("an unexpected error occurred signup"); }
        }).catch((error) => { console.error(error) })
    }

    onSubmitToServer = (user) => {
        const saveData = user;
        delete saveData.confirm;
        storeUser(saveData).then(resp => {
            if (resp.status === 201) {

                return resp.json();
            }
        }, (error) => {
            toast.error("error encounter during data fetch");
            return;
        }).then((response) => {
            if (response) {
                toast.success(`registration successfull`);
                data.storeItem(user);
                this.props.onLoginUser(user);
                this.child.current.resetFields();
                this.props.history.push("/signin");
            }
        }).catch((error) => { console.log(error); })
    }

    componentDidMount() {
        this.getData();
    }

    render() {
        const { location } = this.props;
        return (
            <React.Fragment>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 py-5 mt-5">

                            <div className="container">
                                <h1 className="pl-3 col-md-4">Join your Workspace</h1>
                                <p className="col-md-9 pt-3">EDMS is an intelligent document management solution that helps you you bring all of your documents
                                     into one place—quickly, easily and securely.
                                </p>
                                <div className="pl-3 pt-3">
                                    <img className="img-fluid" src="/images/join_workspace.png" alt="join workspace" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6" style={{ backgroundColor: '#F6F9FF' }}>
                            {/* <div>{this.props.storedUser.fullName}</div> */}
                            <div className="container my-5">
                                <div className="row ">
                                    <div className="col-md-10 offset-md-1">
                                        <div className="row shadow-sm py-5 bg-white">
                                            <div className="col-md-10 offset-md-1">
                                                <MultiForm wrappedComponentRef={(form) => this.form = form}
                                                    ref={this.child} checkUrl={location.pathname}
                                                    onAddUser={this.props.handelAddUser} onSubmitToServer={this.onSubmitToServer} />
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

const mapStateToProps = (state) => {
    return {
        storedUser: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLoginUser: (val) => dispatch({ type: actionTypes.LOGIN_USER, resultEld: { fullName: val.fullName, email: val.email, password: val.password, jobTitle: val.jobTitle } })
    }
}

Signup.propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string,
    }),
};

// insert default values for props to avoid your app breaking
Signup.defaultProps = {
    location: {
        pathname: '',
    },
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);