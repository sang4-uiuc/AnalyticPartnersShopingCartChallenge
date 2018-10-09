/**
 * Mocking client-server processing
 */
import _products from './products.json'
const TIMEOUT = 100


export default {
  getProducts: (cb, timeout) => setTimeout(() => cb(_products), timeout || TIMEOUT),
  // getProducts: (cb, timeout) => setTimeout(() => cb(call()), timeout || TIMEOUT),
  buyProducts: (payload, cb, timeout) => setTimeout(() => cb(), timeout || TIMEOUT)
}

function call() {
fetch('http://localhost:9001/products', { 
              method: 'GET',
            }).then(res => res.json())
            .then(response => console.log('Success:', JSON.stringify(response)))
            .catch(error => console.error('Error:', error));
          }