import React, { Component } from 'react'
import StorePicker from '../components/StorePicker'

class StorePickerContainer extends Component {

  constructor() {
    super()

    this.state = {
      storeId: ''
    }
  }

  handleSubmitStoreId(event) {
    event.preventDefault()

    this.context.router.transitionTo(`/store/` + this.state.storeId)

    console.log(this.state.storeId)
    console.log('you changed the url')
  }

  handleUpdateStoreId(event) {
    // console.log(e.target.value)
    this.setState({
      storeId: event.target.value
    })
  }

  render() {
    return (
      <StorePicker
        onSubmitStoreId={(e) => this.handleSubmitStoreId(e)}
        onUpdateStoreId={(e) => this.handleUpdateStoreId(e)}
        storeId={this.state.storeId} />
    )
  }
}

StorePickerContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default StorePickerContainer
