import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Header from './common/Header';
import Footer from './common/Footer';
import Home from './home/Home';
import Profile from './profile/Profile';
import Pricing from './pricing/Pricing';
import RegisterForm  from './register/RegisterForm';
import ConsumerSignUp from './register/consumerSignUp/ConsumerSignUp';
import BusinessSignUp from './register/businessSignUp/BusinessSignUp';
import Login from './register/login/Login';
import Team from './team/Team';

class Router extends Component {
  // componentDidMount() {
  //   this.props.fetchUser();
  // }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/pricing" component={Pricing} />
          <Route path="/register" component={RegisterForm} />
          <Route path="/consumer" component={ConsumerSignUp} />
          <Route path="/business" component={BusinessSignUp} />
          <Route path="/login" component={Login} />
          <Route path="/team" component={Team} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  return { auth: state.auth }
}

export default connect(mapStateToProps, actions)(Router);
