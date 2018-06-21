import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setDefault } from '../redux/appState/actions'

class IncrementButton extends Component {

  resetNumber = () => {
    this.props.onSetDefault()
  }

  render () {
    return (
      <div>
        <h2>App > ResetButton:</h2>
        <button onClick={this.resetNumber}>reset { this.props.number }</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  number: state.appState.number
})

const mapDispatchToProps = dispatch => ({
  onSetDefault: () => dispatch(setDefault())
})

export default connect(mapStateToProps, mapDispatchToProps)(IncrementButton)