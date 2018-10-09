import React from 'react'
import PropTypes from 'prop-types'
import './ProductItem.css'
import CartContainer from '../containers/CartContainer';
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'


const ProductsList = ({ title, children, totalCartQuantity }) => (
  <div className="List">
    <h3>{title}</h3>
    <div className="CheckOutButton">
      <button><Link to='/basket'>Basket</Link></button>
      <button disabled={true}>
        {totalCartQuantity}
      </button>

    </div>
    <br/>
    <br/>
    <div>{children}</div>
    <div className="CheckOutButton">
      <button><Link to='/basket'>Proceed to checkout</Link></button>
    </div>
    
  </div>
  
)


export default ProductsList
