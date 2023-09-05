import { useSelector } from "react-redux";
import CartProduct from "./CartProduct";

 
const Cart = () => {
  const cart = useSelector((state) => state?.cart);
  console.log(cart)
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10 w-10/12">
      {cart.map((product) => (
        <CartProduct product={product} key={product.id} />
      ))}
    </div>
  );
};

export default Cart;
