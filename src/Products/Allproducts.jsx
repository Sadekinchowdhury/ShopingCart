import { FaShoppingCart } from 'react-icons/fa';
const Allproducts = (product) => {
  console.log(product);
  return (
    <div className="bg-gray-300 p-3 rounded-md">
      <img src={product.product.image} className="w-[80%] mx-auto h-20 mb-4" alt="" />
      <h1 className="pt-3 font-semibold">{product.product.title.substring(0,30)}</h1>
      <p className="text-center font-bold py-2">${product.product.price}</p>

     <div className='bg-black py-2 px-4 flex items-center justify-center'>
     <button className=" flex gap-2 items-center text-center text-white rounded-sm">Add to cart  <span>     <FaShoppingCart/></span> </button>

     </div>
    </div>
  );
};

export default Allproducts;
