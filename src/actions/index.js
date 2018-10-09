import shop from '../api/shop'
import * as types from '../constants/ActionTypes'

const receiveProducts = products => ({
  type: types.RECEIVE_PRODUCTS,
  products
})

export const getAllProducts = () => dispatch => {
  shop.getProducts(products => {
    dispatch(receiveProducts(products))
  })
}

const addToCartUnsafe = productId => ({
  type: types.ADD_TO_CART,
  productId
})

const removeFromCartUnsafe = (productId) => ({
  type: types.REMOVE_FROM_CART,
  productId, 
})

const updateCartUnsafe = (productId, quantity) => ({
  type: types.UPDATE_CART,
  productId,
  quantity,
})

export const addToCart = productId => (dispatch, getState) => {
  if (getState().products.byId[productId].inventory > 0) {
    dispatch(addToCartUnsafe(productId))
  }
}

export const removeFromCart = (productId) => (dispatch, getState) => {
  if (getState().cart.quantityById[productId] > 0) {
    dispatch(removeFromCartUnsafe(productId))
  }
}

export const updateCart = (productId, quantity) => (dispatch, getState) => {
  if (getState().cart.quantityById[productId] > 0) {
    dispatch(updateCartUnsafe(productId, quantity))
  }
}

export const checkout = products => (dispatch, getState) => {
  const { cart } = getState()

  dispatch({
    type: types.CHECKOUT_REQUEST
  })
  shop.buyProducts(products, () => {
    dispatch({
      type: types.CHECKOUT_SUCCESS,
      cart
    })
  })
}