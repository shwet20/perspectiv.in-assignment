import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../features/products/productsSlice";
import { addToCart } from "../features/cart/cartSlice";

const AllProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const productStatus = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);

  useEffect(() => {
    if (productStatus === "idle") {
      dispatch(fetchProducts());
    }
  }, [productStatus, dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <React.Fragment>
      <div>
        <h1>All Products</h1>
        {productStatus === "loading" && <div>Loading...</div>}
        {productStatus === "succeeded" && (
          <div className="product-grid">
            {products.map((product) => (
              <div key={product.pid} className="product-card">
                <div>
                <img src={product.photo} alt={product.pame} height={"100px"} className="product-image"/>
                </div>
                <h3>{product.pame}</h3>
                <p>{product.details}</p>
                <p>${product.price}</p>
                <button onClick={() => handleAddToCart(product)}>
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        )}
        {productStatus === "failed" && <div>{error}</div>}
      </div>
    </React.Fragment>
  );
};

export default AllProducts;
