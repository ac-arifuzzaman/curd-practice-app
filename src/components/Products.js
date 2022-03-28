import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4030/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // delete the product
  const handleDeleteProduct = (id) => {
    const confirmation = window.confirm("Are you confirm you want to delete");
    if (confirmation) {
      const url = `http://localhost:4030/products/${id}`;
      fetch(url, {
        method: "delete",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Deleted successfully");
            const remainingProduct = products.filter(
              (product) => product._id !== id
            );
            setProducts(remainingProduct);
          }
        });
    }
  };

  return (
    <div>
      <h2>thsi is products {products.length}</h2>
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            <h3>
              {product.name} <small>{product.price}</small>{" "}
              <small>{product.quantity}</small>{" "}
              <Link to={`/products/update/${product._id}`}>
                <button>Update</button>
              </Link>
              <button onClick={() => handleDeleteProduct(product._id)}>
                Delete
              </button>
            </h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
