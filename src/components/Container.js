import React, { Component } from 'react'
import IncrementButton from './IncrementButton'
import { connect } from 'react-redux'

class Container extends Component {

  render () {
    return (
      <div>
        <h2>App > Container: number({this.props.number})</h2>
        <IncrementButton/>

      </div>
    )
  }
}

const mapStateToProps = state => ({
  number: state.appState.number
})

export default connect(mapStateToProps)(Container)