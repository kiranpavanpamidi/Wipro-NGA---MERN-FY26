import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, updateProduct } from "../redux/productSlice";

function ProductAdmin() {
  const dispatch = useDispatch();
  const { items, loading } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;

  const updateFirstProduct = () => {
    dispatch(
      updateProduct({
        ...items[0],
        title: "Updated Product Title!",
      })
    );
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Product Admin</h2>

      <button onClick={updateFirstProduct}>Update First Product</button>

      <ul>
        {items.map((p) => (
          <li key={p.id}>
            {p.title} — Rs{p.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductAdmin;
