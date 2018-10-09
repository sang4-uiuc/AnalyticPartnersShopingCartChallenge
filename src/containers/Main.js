import React from 'react'
import { Switch, Route } from 'react-router-dom'
import CartContainer from './CartContainer'
import ProductsContainer from './ProductsContainer'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={ProductsContainer}/>
      <Route path='/basket' component={CartContainer}/>
      {/* <Route path='/checkout' component={CheckoutContainer}/> */}
    </Switch>
  </main>
)

export default Main
