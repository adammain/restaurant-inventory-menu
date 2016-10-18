import React, { PropTypes } from 'react'
import { formatPrice } from '../helpers/utils'
import CSSTransitionGroup from 'react-addons-css-transition-group'

const Order = (props) => {

  const orderIds = Object.keys(props.order) // gives us an array of orders in orderIds object
  const total = orderIds.reduce((prevTotal, key) => { // research reduce() -> could this be used other places ot clean up my code?
    const fish = props.fishes[key]
    const count = props.order[key]
    const isAvailable = fish && fish.status === 'available'

    if (isAvailable) {
      return prevTotal + (count * fish.price || 0)
    }
    return prevTotal
  }, 0) // sets initial value to 0, uses reduce to combine/create new 'something'? checking first to make sure there are fish objects to be found and that they are available. Then adds them up.

  return (
    <div className>
      <h3 className="order-title">Your Order</h3>

      <CSSTransitionGroup
        className="order"
        component="ul"
        transitionName="order"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}
      >
        {orderIds.map(props.renderOrder)}
        <li className="total">
          <strong>Total:</strong>
          {formatPrice(total)}
        </li>
      </CSSTransitionGroup>

    </div>
  )
}

Order.PropTypes = {
  order: PropTypes.object.isRequired,
  fishes: PropTypes.object.isRequired,
  renderOrder: PropTypes.func.isRequired
}

export default Order
