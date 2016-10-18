import React, { PropTypes } from 'react'
import Fish from './Fish'

const Menu = (props) => {
  return (
    <ul className="list-of-fishes">
      {
        Object.keys(props.fishes).map(key => (
          <Fish
            key={key}
            index={key}
            details={props.fishes[key]}
            onAddToOrder={props.onAddToOrder} />
        ))
      }
    </ul>
  )
}

Menu.PropTypes = {
  fishes: PropTypes.object,
  onAddToOrder: PropTypes.func.isRequired
}

export default Menu
