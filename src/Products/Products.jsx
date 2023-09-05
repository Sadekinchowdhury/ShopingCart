import { useEffect, useState } from "react";
import Allproducts from "./Allproducts";

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
   <div className="w-10/12 mx-auto py-20">
     <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
      {products.map((product) => (
        <Allproducts product={product} key={product.id} />
      ))}
    </div>
   </div>
  );
};
export default Product;
