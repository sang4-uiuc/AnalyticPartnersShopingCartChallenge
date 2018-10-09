import React from 'react'
import PropTypes from 'prop-types'

const Product = ({ price, title }) => (
  <div>
    {title} - &#36;{price}
  </div>
)

export default Product
