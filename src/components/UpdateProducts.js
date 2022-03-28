import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UpdateProducts = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const url = `http://localhost:4030/products/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  // updateproducts

  const handleNameChange = (e) => {
    const updatedName = e.target.value;
    const newName = {
      name: updatedName,
      price: product.price,
      quantity: product.quantity,
    };
    setProduct(newName);
  };

  const handlePriceChange = (e) => {
    const updatedPrice = e.target.value;
    const newPrice = {
      name: product.name,
      price: updatedPrice,
      quantity: product.quantity,
    };
    setProduct(newPrice);
  };

  const handleQuantityChange = (e) => {
    const updateQuantiy = e.target.value;
    const newQuantity = {
      name: product.name,
      price: product.price,
      quantity: updateQuantiy,
    };
    setProduct(newQuantity);
  };

  const handleUpdate = (e) => {
    const url = `http://localhost:4030/products/${id}`;
    fetch(url, {
      method: "put",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("updated successfully");
          setProduct("");
        }
      });
    e.preventDefault();
  };
  return (
    <div>
      <h2>this is update products</h2>
      <p>
        <small>{id}</small> <br />
        {product.name} :: {product.price} :: {product.quantity}
      </p>
      <form onSubmit={handleUpdate}>
        <input
          type="text"
          name=""
          id=""
          onChange={handleNameChange}
          value={product.name || ""}
        />
        <input
          type="number"
          name=""
          onChange={handlePriceChange}
          id=""
          value={product.price || ""}
        />
        <input
          type="number"
          name=""
          onChange={handleQuantityChange}
          id=""
          value={product.quantity || ""}
        />
        <input type="submit" value="Update" />
      </form>
    </div>
  );
};

export default UpdateProducts;
