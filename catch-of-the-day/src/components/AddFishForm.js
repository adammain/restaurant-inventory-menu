import React, { Component, PropTypes } from 'react'

class AddFishForm extends Component {

  constructor(props) {
    super()
  }

  UpdateFish(e) {
    e.preventDefault()

    const fish = {
      name: this.name.value,
      price: this.price.value,
      status: this.status.value,
      description: this.description.value,
      image: this.image.value,
    }

    this.props.onCreateFish(fish)
    this.fishForm.reset()
  }

  render() {
    return (
      <form ref={(input) => this.fishForm = input} className="fish-edit" onSubmit={(e) => this.UpdateFish(e)}>
        <input ref={(input) => this.name = input} type="text" placeholder="Fish Name" />
        <input ref={(input) => this.price = input} type="text" placeholder="Fish Price" />
        <select ref={(input) => this.status = input}>
          <option value="available">Fresh!</option>
          <option value="unavailable">Out-of-stock</option>
        </select>
        <textarea ref={(input) => this.description = input} placeholder="Fish Description"></textarea>
        <input ref={(input) => this.image = input} type="text" placeholder="Fish Image" />
        <button type="submit">+ Add Item</button>
      </form>
    )
  }
}

AddFishForm.PropTypes = {
  onCreateFish: PropTypes.func.isRequired,
  onUpdateFish: PropTypes.func.isRequired
}

export default AddFishForm
