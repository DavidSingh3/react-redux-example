import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setNumber } from '../redux/appState/actions'

class IncrementButton extends Component {

  incrementNumber = () => {
    var number = this.props.number
    number ++
    this.props.onSetNumber(number)
  }

  render () {
    return (
      <div>
        <h2>App > Container > IncrementButton:</h2>
        <button onClick={this.incrementNumber}>click me { this.props.number }</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  number: state.appState.number
})

const mapDispatchToProps = dispatch => ({
  onSetNumber: number => dispatch(setNumber(number))
})

export default connect(mapStateToProps, mapDispatchToProps)(IncrementButton)