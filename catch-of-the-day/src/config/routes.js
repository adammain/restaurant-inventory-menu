import React from 'react'
import { BrowserRouter, Match, Miss } from 'react-router'
import StorePickerContainer from '../containers/StorePickerContainer'
import App from '../containers/App'
import NotFound from '../components/NotFound'

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern='/' component={StorePickerContainer} />
        <Match pattern='/store/:storeId' component={App} />
        <Miss component={NotFound} />
      </div>
    </BrowserRouter>
  )
}

export default Root
