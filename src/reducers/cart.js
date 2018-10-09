import {
  ADD_TO_CART,
  UPDATE_CART,
  CHECKOUT_REQUEST,
  CHECKOUT_FAILURE,
  REMOVE_FROM_CART
} from '../constants/ActionTypes'

const initialState = {
  addedIds: [],
  quantityById: {}
}

const addedIds = (state = initialState.addedIds, action) => {


  switch (action.type) {
    case ADD_TO_CART:
      if (state.indexOf(action.productId) !== -1) {
        return state
      }

      // returns the original properties of state of addedIds with the added productId
      return [ ...state, action.productId ]
    case UPDATE_CART:
      return state
    case REMOVE_FROM_CART:
      return [...state.slice(0, action.productId - 1) , ...state.slice(action.productId)]
    default:
      return state
  }
}
function keepCloning(objectpassed) {
  if (objectpassed === null || typeof objectpassed !== 'object') {
     return objectpassed;
  }
// give temporary-storage the original obj's constructor
var temporary = objectpassed.constructor(); 
  for (var key in objectpassed) {
    temporary[key] = keepCloning(objectpassed[key]);
  }
  return temporary;
}
const quantityById = (state = initialState.quantityById, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const { productId } = action
      return { ...state,
        [productId]: (state[productId] || 0) + 1
      }
    case UPDATE_CART:
    return { ...state,
      [action.productId]: action.quantity
    }
    case REMOVE_FROM_CART:
      var t = keepCloning(state)
      delete t[action.productId]
      return t
    default:
      return state
  }
}

export const getQuantity = (state, productId) =>
  state.quantityById[productId] || 0

function sum( obj ) {
  var sum = 0;
  for( var el in obj ) {
    if( obj.hasOwnProperty( el ) ) {
      sum += parseFloat( obj[el] );
    }
  }
  return sum;
}

export const getTotalQuantity = state => sum(state.quantityById)

export const getAddedIds = state => state.addedIds

const cart = (state = initialState, action) => {
  switch (action.type) {
    case CHECKOUT_REQUEST:
      return initialState
    case CHECKOUT_FAILURE:
      return action.cart
    default:
      return {
        addedIds: addedIds(state.addedIds, action),
        quantityById: quantityById(state.quantityById, action)
      }
  }
}

export default cart
