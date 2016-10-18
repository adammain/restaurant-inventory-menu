import React, { PropTypes } from 'react'
import { getFunName } from '../helpers/utils'

const StorePicker = (props) => {

  return (
    <form className="store-selector" onSubmit={props.onSubmitStoreId}>
      <h2>PLEASE ENTER A STORE</h2>
      <input
        type="text"
        required
        placeholder={getFunName()}
        // defaultValue={getFunName()} <- can't use when value also set?
        onChange={props.onUpdateStoreId}
        value={props.storeId} // <- not from tutorial but only way I know how to get value back to handler from stateless function
        // ref={(input) => { this.storeInput = input }} <- from tutorial but can't get to work from stateless function (he uses class & render for 'this') Q?-> Is there a way to test if value is empty and set it to "getFunName()" if it is empty?
        />
      <button type="submit">VISIT STORE</button>
    </form>
  )
}

StorePicker.propTypes = {
  onSubmitStoreId: PropTypes.func.isRequired,
  onUpdateStoreId: PropTypes.func.isRequired,
  storeId: PropTypes.string.isRequired
}

export default StorePicker
