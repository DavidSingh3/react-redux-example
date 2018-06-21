import React, { Component } from 'react';
import './App.css';
import Container from './components/Container'
import ResetButton from './components/ResetButton'
import { connect } from 'react-redux'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <h1>App: number({this.props.number})</h1>
          <Container/>
          <ResetButton/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  number: state.appState.number
})

export default connect(mapStateToProps)(App);
