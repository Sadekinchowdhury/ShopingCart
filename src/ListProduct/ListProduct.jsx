import { useEffect, useState } from 'react';
import ProductItem from './Products';


const ListProduct = () => {
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [showCart, setShowCart] = useState(false); // Added showCart state
    const [products, setProducts] = useState([]);

    useEffect(() => {
      fetch("products.json")
        .then((res) => res.json())
        .then((data) => setProducts(data));
    }, []);
   // Load cart from localStorage on component mount
    useEffect(() => {
      const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
      setCart(savedCart);
    }, []);
  
    // Update localStorage when cart changes
    useEffect(() => {
      localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);
  
    const addToCart = (product) => {
      setCart([...cart, product]);
    };
  
    const removeFromCart = (product) => {
      const updatedCart = cart.filter((item) => item.id !== product.id);
      setCart(updatedCart);
    };
  
    useEffect(() => {
      const totalPrice = cart.reduce((sum, product) => sum + product.price, 0);
      setTotalPrice(totalPrice);
    }, [cart]);
  
  return (
    <div className="container mx-auto mt-8">
    <h1 className="text-2xl font-semibold mb-4">Product Listing</h1>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} onAddToCart={addToCart} />
      ))}
    </div>

    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">Shopping Cart</h2>
      <div className="flex items-center">
        <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-2">
          {cart.length}
        </span>
        <button
          className="text-blue-500 hover:underline"
          onClick={() => setShowCart(!showCart)}
        >
          View Cart
        </button>
      </div>
    </div>

    {showCart && (
      <div className="border p-4 mt-4">
        {cart.map((product) => (
          <div key={product.product.id} className="flex items-center justify-between mb-2">
            <div>
              <img src={`images/${product.image}`} alt={product.name} className="w-12 h-12" />
              <span className="ml-2">{product.name}</span>
            </div>
            <div>
              <span>${product.product.price.toFixed(2)}</span>
              <button
                onClick={() => removeFromCart(product)}
                className="text-red-500 ml-2"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
        <div className="mt-4">
          <p className="text-xl font-semibold">Total Price: ${totalPrice.toFixed(2)}</p>
        </div>
      </div>
    )}
  </div>
  )
}

export default ListProduct
