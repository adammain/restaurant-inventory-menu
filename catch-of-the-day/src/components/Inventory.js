import React, { PropTypes } from 'react'
import AddFishForm from './AddFishForm'

const Inventory = (props) => {
  return (
    <div>
      <h3 className="order-title">Inventory</h3>
      {Object.keys(props.fishes).map(props.renderInventory)}
      <AddFishForm onCreateFish={props.onCreateFish} />
      <button onClick={props.loadSamples}>Load Sample Fishes</button>
    </div>
  )
}

Inventory.PropTypes = {
  onCreateFish: PropTypes.func.isRequired,
  loadSamples: PropTypes.func.isRequired,
  renderInventory: PropTypes.func.isRequired
}

export default Inventory
