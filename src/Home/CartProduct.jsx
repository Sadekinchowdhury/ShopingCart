import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { removeTocart } from "../Redux/ActionType/ActionType";

const CartProduct = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="bg-gray-300 p-3 rounded-md relative">
      <div className="absolute right-1 top-1">
        <p className="rounded-full p-2 bg-orange-400">{product.quantity}</p>
      </div>
      <img
        src={product.product?.image}
        className="w-[80%] mx-auto h-32 mb-4"
        alt=""
      />
      <h1 className="pt-3 font-semibold">{product.title}</h1>
      <p className="text-center font-bold py-2">
        ${product.product.price * product.quantity}
      </p>

      <div className="bg-black py-2 px-4 flex items-center justify-center">
        <button
          onClick={() => dispatch(removeTocart(product))}
          className=" flex gap-2 items-center text-center text-white rounded-sm"
        >
          {" "}
          Remove from cart{" "}
          <span>
            {" "}
            <FaTrash />
          </span>{" "}
        </button>
      </div>
    </div>
  );
};

export default CartProduct;
