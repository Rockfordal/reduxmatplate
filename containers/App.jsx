import React, { Component, PropTypes } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../components/Header';
import MainSection from '../components/MainSection';
import * as TodoActions from '../actions/todos';
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router';
import MyNavbar from '../components/layout/Navbar.jsx';
import Cars from '../components/car/Cars.jsx';

const Hem    = () => <h1>Hem</h1>;
const Todo = () => <h1>Todo</h1>;
const Car = () => <h1>Bil</h1>;
// const Cars = () => <h1>Bilar</h1>;

class App extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={MyNavbar}>
          <IndexRoute component={Hem}/>
          <Route path="/cars" component={Cars}/>
            <Route path="/cars/:id" component={Car}/>
          <Route path="/todos" component={Todo}/>
        </Route>
      </Router>
    ) } }


App.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    todos: state.todos
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TodoActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
