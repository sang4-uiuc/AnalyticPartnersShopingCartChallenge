import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { checkout, removeFromCart, updateCart } from '../actions'
import { getTotal, getCartProducts, getTotalCartQuantity } from '../reducers'
import Cart from '../components/Cart'

const CartContainer = ({ products, total, checkout, updateCart, removeFromCart, totalQuantity }) => (
  <Cart
    products={products}
    total={total}
    totalCartQuantity={totalQuantity}
    updateCart = {updateCart}
    removeFromCart = {removeFromCart}
    onCheckoutClicked={() => checkout(products)} />
)


const mapStateToProps = (state) => ({
  products: getCartProducts(state),
  total: getTotal(state),
  totalQuantity: getTotalCartQuantity(state),
})

export default connect(
  mapStateToProps,
  { checkout, removeFromCart, updateCart }
)(CartContainer)
