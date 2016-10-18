import React, { Component } from 'react'
import MenuContainer from './MenuContainer'
import OrderContainer from './OrderContainer'
import InventoryContainer from './InventoryContainer'
import sampleFishes from '../helpers/api'
import base from '../base'

class App extends Component {

  constructor() {
    super()

    this.handleCreateFish = this.handleCreateFish.bind(this)
    this.loadSamples = this.loadSamples.bind(this)
    this.handleAddToOrder = this.handleAddToOrder.bind(this)
    this.handleUpdateFish = this.handleUpdateFish.bind(this)
    this.handleRemoveFish = this.handleRemoveFish.bind(this)
    this.handleRemoveOrder = this.handleRemoveOrder.bind(this)

    //getinitialstate
    this.state = {
      fishes: {},
      order: {}
    }
  }

  componentWillMount() {
    // this runs right before the <App> is rendered
    this.ref = base.syncState(`${this.props.params.storeId}/fishes`, {
      context: this,
      state: 'fishes'
    })

    // check if there is any order in localStorage
    const localStorageRef = localStorage.getItem(`order-${this.props.params.storeId}`)

    if (localStorageRef) {
      // update our App component's order state
      this.setState({
        order: JSON.parse(localStorageRef) // JSON.parse turns JSON string back into object
      })
    }
  }

  componentWillUnmount() {
    base.removeBinding(this.ref)
  }

  // could use "shouldComponentUpdate" lifecycle method to prevent "double rendering" of page as each piece of stored data rerenders page (test if page should rerender or not)
  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem(`order-${this.props.params.storeId}`,
      JSON.stringify(nextState.order)) // for local storage, "value" in key/value pair can only be string. must use stringify to make object into JSON string.
  }

  handleCreateFish(fish) {
    // take copy of & update our state (for performance per Wes Bos)
    const fishes = {...this.state.fishes}
    // add in our new fish
    const timestamp = Date.now();
    fishes[`fish-${timestamp}`] = fish;
    // this.state.fishes.fish1 = fish; <- could do this but not recommended by FB = performance
    // set state
    this.setState({ fishes }) // es5 version would be this.setState({fishes: fishes})
  }

  loadSamples() {
    this.setState({
      fishes: sampleFishes // loads initial sample fishes when button pushed from child component
    })
  }

  handleAddToOrder(key) {
    // take a copy of our state
    const order = {...this.state.order};
    // update or add the new number of fish ordered
    order[key] = order[key] + 1 || 1;
    // update our state
    this.setState({ order: order })
  }

  handleRemoveOrder(key) {
    const order = {...this.state.order}
    delete order[key]
    this.setState({ order })
  }

  handleUpdateFish(e, key) {
    const fish = this.state.fishes[key]
    // take a copy of that fish and update it with the new data
    // could use: updatedFish = Object.assign({}, fish) to copy new fish or:
    const updatedFish = {
      ...fish, // takes old fish and overlays it with new stuff below  (vid 20 around 9min mark)
      [e.target.name]: [e.target.value]} // gets the element by its name then gets its value and overwrites attributes of above fish with new value attr.

    const fishes = {...this.state.fishes}
    fishes[key] = updatedFish
    this.setState({ fishes })
  }

  handleRemoveFish(key) {
    const fishes = {...this.state.fishes}
    fishes[key] = null
    this.setState({ fishes })
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <MenuContainer
          fishes={this.state.fishes}
          onAddToOrder={this.handleAddToOrder} />
        <OrderContainer
          order={this.state.order}
          fishes={this.state.fishes}
          onRemoveOrder={this.handleRemoveOrder} />
        <InventoryContainer
          onCreateFish={(fish) => this.handleCreateFish(fish)}
          loadSamples={this.loadSamples}
          fishes={this.state.fishes}
          onUpdateFish={this.handleUpdateFish}
          onRemoveFish={this.handleRemoveFish} />
      </div>
    )
  }
}

export default App
