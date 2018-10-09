import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import CartProductItem from './CartProductItem'
import './ProductItem.css'
import { removeFromCart } from '../actions'
import { DropdownButton, MenuItem } from 'react-bootstrap';
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'


var card = ""
const Cart = ({ products, total, totalCartQuantity, updateCart, removeFromCart, onCheckoutClicked }) => {
  const hasProducts = products.length > 0
  var discount = 0
  var arr = []
  var len = products.length
  Object.keys(products).forEach(function (key) {
    arr.push({ "sku": products[key].sku, "quantity": products[key].quantity });
  });
  const nodes = hasProducts ? (



    products.map(product =>
      <CartProductItem
        key={product.sku}
        product={product}
        updateCart={updateCart}
        onRemoveFromCartClicked={() => removeFromCart(product.sku)} />
    )
  ) : (
      <em>Please add some products to cart.</em>
    )


  const handleChange = e => {
    card = e.target.value
  };

  function valid_credit_card(value) {
    // accept only digits, dashes or spaces

    if (/[^0-9-\s]+/.test(value) || value.length != 16) return false;

    var nCheck = 0, nDigit = 0, bEven = false;
    value = value.replace(/\D/g, "");

    for (var n = value.length - 1; n >= 0; n--) {
      var cDigit = value.charAt(n),
        nDigit = parseInt(cDigit, 10);

      if (bEven) {
        if ((nDigit *= 2) > 9) nDigit -= 9;
      }

      nCheck += nDigit;
      bEven = !bEven;
    }

    if ((nCheck % 10) == 0) {
      console.log("valid card")
      // onCheckoutClicked()
      
      return <p>Thanks for the order</p>
      // var data = { "basket": arr, "cardNumber": value };
      // fetch('http://localhost:9001/checkout', {
      //   method: 'POST',
      //   headers: {
      //     'Accept': 'application/json',
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(data)
      // }).then(res => res.json())
      //   .then(response => console.log('Success:', JSON.stringify(response)))
      //   .catch(error => console.error('Error:', error));
      // Failed to load http://localhost:9001/checkout: Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource. 
      // https://stackoverflow.com/questions/20035101/why-does-my-javascript-get-a-no-access-control-allow-origin-header-is-present

    } else {
      console.log("invalid card")
    }

  }



  return (
    <div>
      <h3>Basket/checkout view</h3>
      <div className="CheckoutViewButtons">
        <div className="ShopButton">
          <button><Link to='/'>Continue Shopping</Link></button>
        </div>
        <div className="CheckOutButton">
          <button><Link to='/basket'>Basket</Link></button>
          <button disabled={true}>
            {totalCartQuantity}
          </button>

        </div>
      </div>
      <br />
      <br />
      <br />
      <div>{nodes}</div>
      <br />
      <br />
      <br />
      <form>
        <label>
          Enter Promo Code:
        <input type="text" />
        </label>

      </form>
      <br />
      <button>Apply</button>
      <br />
      <p>SubTotal: &#36;{total}</p>
      <p>Promotional discount amount: &#36;{discount}</p>
      <p>Basket Total: &#36;{total - discount}</p>
      <br />
      <form >
        <label>
          Please enter your credit card number:
        <input
            // value={this.state.card}
            onChange={handleChange.bind(this)}
          />
        </label>
      </form>
      <button onClick={() => (valid_credit_card(card))}
        disabled={hasProducts ? '' : 'disabled'}>
        Checkout
      </button>
      <br/>
    </div>
  )
}


export default Cart