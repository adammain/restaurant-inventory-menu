import React, { PropTypes, Component } from 'react'
import Header from '../components/Header'
import Menu from '../components/Menu'

class MenuContainer extends Component {

  constructor(props) {
    super()
  }

  render() {
    return (
      <div className="menu">
        <Header tagline="Fresh Seafood Market" />
        <Menu
          fishes={this.props.fishes}
          onAddToOrder={this.props.onAddToOrder} />
      </div>
    )
  }
}

MenuContainer.PropTypes = {
  fishes: PropTypes.object,
  onAddToOrder: PropTypes.func.isRequired
}

export default MenuContainer
