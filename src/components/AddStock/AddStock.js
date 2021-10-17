import React, { useState } from "react";

const AddStock = () => {
  const [newStock, setNewStock] = useState({
    name: "",
    quantity: 0,
  });

  const handleChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    const name = e.target.name;

    setNewStock({
      ...newStock,
      [name]: value,
    });
  };
  return (
    <>
      <input
        name="name"
        className="input is-large"
        type="text"
        value={newStock.name}
        placeholder="Name"
        onChange={(e) => handleChange(e)}
      />
      <input
        name="quantity"
        className="input is-large"
        type="number"
        value={newStock.quantity}
        placeholder="Quantity"
        onChange={(e) => handleChange(e)}
      />
    </>
  );
};

export default AddStock;
