import React, { PropTypes, Component } from 'react';
import Order from '../components/Order'
import { formatPrice } from '../helpers/utils'
import CSSTransitionGroup from 'react-addons-css-transition-group'

class OrderContainer extends Component {

  constructor(props) {
    super()

    this.renderOrder = this.renderOrder.bind(this)
  }

  renderOrder(key) {
    const fish = this.props.fishes[key]
    const count = this.props.order[key]
    const removeButton = <button onClick={() => this.props.onRemoveOrder(key)}>&times;</button> // can store jsx in variable

    if (!fish || fish.status === 'unavailable') {
      return <li key={key}>Sorry, {fish ? fish.name : 'fish'} is no longer available! {removeButton}</li>
    }

    // the <span key={count} below allows us to apply transitions to a new count variable replacing an old on ".count-enter" && ".count-leave"
    return (
      <li key={key}>
        <span>
          <CSSTransitionGroup
            component="span"
            className="count"
            transitionName="count"
            transitionEnterTimeout={250}
            transitionLeaveTimeout={250}
          >
            <span key={count}>{count}</span>
          </CSSTransitionGroup>

          lbs {fish.name} {removeButton}
        </span>
        <span className="price">{formatPrice(count * fish.price)}</span>
      </li>
    )
  }

  render() {
    return (
      <div>
        <Order
          order={this.props.order}
          fishes={this.props.fishes}
          renderOrder={this.renderOrder}
          onRemoveOrder={this.props.onRemoveOrder} />
      </div>
    )
  }
}

OrderContainer.PropTypes = {
  order: PropTypes.object.isRequired,
  fishes: PropTypes.object.isRequired,
  onRemoveOrder: PropTypes.func.isRequired
}

export default OrderContainer
