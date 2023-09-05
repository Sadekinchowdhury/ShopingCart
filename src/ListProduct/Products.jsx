 

const ProductItem = (props) => {
    const {product,onAddToCart}=props
 
  return (
    <div>
       <div className="border p-4 m-2">
      <div className="flex items-center justify-center">
      <img src={product.image} alt={product.name} className="mb-2  w-20 h-20" />
      </div>
      <h2 className="text-lg font-semibold">{product.title}</h2>
      <p className="text-gray-500">${product.price.toFixed(2)}</p>
      <button onClick={() => onAddToCart(product)} className="bg-blue-500 text-white mt-2 p-2">
        Add to Cart
      </button>
    </div>
    </div>
  )
}

export default ProductItem;
