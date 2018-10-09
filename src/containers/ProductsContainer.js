import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addToCart } from '../actions'
import { getVisibleProducts } from '../reducers/products'
import { getTotal, getCartProducts, getTotalCartQuantity } from '../reducers'
import ProductItem from '../components/ProductItem'
import ProductsList from '../components/ProductsList'

const ProductsContainer = ({ products, addToCart, totalQuantity }) => (
  <ProductsList title="Products" totalCartQuantity={totalQuantity}>
    {products.map(product =>
      <ProductItem
        key={product.sku}
        product={product}
        onAddToCartClicked={() => addToCart(product.sku)} />
    )}
  </ProductsList>

)


const mapStateToProps = state => ({
  products: getVisibleProducts(state.products),
  totalQuantity: getTotalCartQuantity(state),
})

export default connect(
  mapStateToProps,
  { addToCart }
)(ProductsContainer)
