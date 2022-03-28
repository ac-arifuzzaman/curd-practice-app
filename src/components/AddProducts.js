import React, { useRef } from "react";

const AddProducts = () => {
  const nameRef = useRef();
  const priceRef = useRef();
  const quantityRef = useRef();

  const handleAddProduct = (e) => {
    const name = nameRef.current.value;
    const price = priceRef.current.value;
    const quantity = quantityRef.current.value;
    const newProduct = { name: name, price: price, quantity: quantity };

    fetch("http://localhost:4030/products", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Data added successfully");
          e.target.reset();
        }
      });
    e.preventDefault();
  };
  return (
    <div>
      <h2>this is AddProducts</h2>
      <form onSubmit={handleAddProduct}>
        <input type="text" ref={nameRef} />
        <input type="number" name="" id="" ref={priceRef} />
        <input type="number" name="" id="" ref={quantityRef} />
        <br />
        <input type="submit" value="Add" />
      </form>
    </div>
  );
};

export default AddProducts;
