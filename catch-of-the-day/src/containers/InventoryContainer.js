import React, { PropTypes, Component } from 'react';
import Inventory from '../components/Inventory'

class InventoryContainer extends Component {

  constructor(props) {
    super()

    this.renderInventory = this.renderInventory.bind(this)
  }

  renderInventory(key) {
    const fish = this.props.fishes[key]
    return (
      <div className="fish-edit" key={key}>
        <input name="name" value={fish.name} type="text" placeholder="Fish Name" onChange={(e) => this.props.onUpdateFish(e, key)} />
        <input name="price" value={fish.price} type="text" placeholder="Fish Price" onChange={(e) => this.props.onUpdateFish(e, key)} />

        <select type="text" name="status" value={fish.status} placeholder="Fish Status" onChange={(e) => this.props.onUpdateFish(e, key)}>
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>

        <textarea name="desc" value={fish.desc} placeholder="Fish Description" onChange={(e) => this.props.onUpdateFish(e, key)}></textarea>
        <input name="image" value={fish.image} type="text" placeholder="Fish Image" onChange={(e) => this.props.onUpdateFish(e, key)} />
        <button onClick={() => this.props.onRemoveFish(key)}>Remove Fish</button>
      </div>
    )
  }

  render() {
    return (
      <div>
        <Inventory
          onCreateFish={this.props.onCreateFish}
          loadSamples={this.props.loadSamples}
          fishes={this.props.fishes}
          renderInventory={this.renderInventory} />
      </div>
    )
  }
}

InventoryContainer.PropTypes = {
  onCreateFish: PropTypes.func.isRequired,
  loadSamples: PropTypes.func.isRequired,
  fishes: PropTypes.object.isRequired,
  onUpdateFish: PropTypes.func.isRequired,
  onRemoveFish: PropTypes.func.isRequired
}

export default InventoryContainer
