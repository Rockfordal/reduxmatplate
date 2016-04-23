import React, { Component, PropTypes } from "react";
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
// import Header from '../components/Header';
// import MainSection from '../components/MainSection';
import * as TodoActions from '../actions/todos';
// import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router';
// import MyNavbar from '../components/layout/Navbar.jsx';

class App extends React.Component {
  render() {
    const { todos, actions } = this.props;
    return (
      <div>
        <Header addTodo={actions.addTodo} />
        <MainSection todos={todos} actions={actions} />
      </div>
)}}
