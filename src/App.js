import React, { Component } from 'react';
import { ToastContainer, toast } from "react-toastify";
import { Route, Redirect, Switch } from "react-router-dom";
import { storeUser } from "./service/dataService.js";
import Storage from "./service/Storage.js";

import Signin from './component/signin/Signin';
import Signup from './component/signup/Signup';
import Profile from './component/profile/Profile.jsx';
import NotFound from './component/not-found/NotFound';

import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import ProtectedRoute from './component/ProtectedRoute.jsx';
const serverData = new Storage();
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: { fullName: '', password: '', jobTitle: '', email: '' },
      users: { email: '', password: '' }
    };
    this.child = React.createRef();
  }

  handelAddUser = (user) => {
    const data = { ...user };
    this.setState({ users: data });
    return data;
  }

  dataToSend(data) {
    return { "name": data.fullName, "email": data.email, "password": data.password }
  }

  componentDidMount() {
    const user = serverData.getItemsFromStorage();
    console.log(user)
    this.setState({ user: { ...user } })
    console.log(this.state.user)
  }


  render() {
    const { user } = this.state;
    return (
      <React.Fragment>
        <ToastContainer />
        <Switch>
          <Route path="/not-found" component={NotFound} />
          <Route path="/signin" render={(props) => <Signin {...props} users={user} />} />
          <ProtectedRoute path="/profile" render={(props) => <Profile {...props} users={user} />} />
          <Route exact path="/" render={(props) => <Signup {...props} users={user} handelAddUser={this.handelAddUser} />} />
          <Redirect to="/not-found" />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
