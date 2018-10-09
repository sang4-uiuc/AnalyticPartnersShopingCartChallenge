import React from 'react'
import PropTypes from 'prop-types'

const CartProduct = ({ price, title, quantity }) => (
  <div>
    {title} - &#36;{quantity * price}
  </div>
)

export default CartProduct
