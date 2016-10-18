import React, { PropTypes } from 'react'
import { formatPrice } from '../helpers/utils'


const Fish = (props) => {
  const { details, index } = props;
  const isAvailable = details.status === 'available';
  const buttonText = isAvailable ? 'Add To Order' : 'Sold Out!';

  return (
    <div className="menu-fish">
      <img src={details.image} alt={details.name} />
      <h3 className="fish-name">
        {details.name}
        <span className="price">{formatPrice(details.price)}</span>
      </h3>
      <p>{details.desc}</p>
      <button
        disabled={!isAvailable}
        onClick={() => props.onAddToOrder(index)}>
          {buttonText}
      </button>
    </div>
    // 'onClick' will actually execute onAddToOrder function for all elements on load unless you use 1 of 2 options:
    // 1: {props.AddToOrder.bind(null, index)}
    // 2: {() => props.AddToOrder(index)}
  )
}

Fish.PropTypes = {
  details: PropTypes.object,
  onAddToOrder: PropTypes.func.isRequired,
  index: PropTypes.object.isRequired,
}

export default Fish
