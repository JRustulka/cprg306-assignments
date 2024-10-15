"use client";

import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("produce");

  const handleSubmit = (event) => {
    event.preventDefault();
    let item = { name, quantity, category };
    console.log(item);
    alert(
      "Quantity:" +
        quantity +
        " Name:" +
        name +
        " Category:" +
        category +
        " -- Item added--"
    );
    setName("");
    setQuantity(1);
    setCategory("Produce");
  };

  const handleNameChange = (event) => {
    let name = event.target.value;
    name = name.replace(/[^A-Za-z]/g, "");
    setName(name);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    setQuantity(quantity - 1);
  };

  return (
    <div class="flex-1 flex-col bg-black text-white w-64 p-3 border-black border-2">
      <form>
        <h1 class="text-black flex-1 flex-row m-2 bg-white">{quantity}</h1>
        <button
          type="button"
          disabled={quantity === 20}
          class="w-8 m-2 border-black border-2 bg-green-700 text-white hover:bg-green-900 focus:ring-2 focus:ring-grey-700 disabled:opacity-50"
          onClick={increment}
        >
          +
        </button>

        <button
          type="button"
          disabled={quantity === 1}
          class="w-8 m-2 border-black border-2 bg-red-500 text-white hover:bg-red-900 focus:ring-2 focus:ring-grey-700 disabled:opacity-50"
          onClick={decrement}
        >
          -
        </button>
        <input
          class="text-black m-2"
          type="text"
          id="name"
          value={name}
          onChange={(event) => handleNameChange(event)}
          required
        ></input>

        <select
          class="text-black m-2"
          id="catagorySelect"
          name="catagorySelect"
          value={category}
          onChange={(event) => handleCategoryChange(event)}
        >
          <option value="Category" disabled>
            Category
          </option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Bakery">Bakery</option>
          <option value="Meat">Meat</option>
          <option value="Frozen_Foods">Frozen Foods</option>
          <option value="Canned_Goods">Canned Goods</option>
          <option value="Dry Goods">Dry Goods</option>
          <option value="Beverages">Beverages</option>
          <option value="Snacks">Snacks</option>
          <option value="Household">Household</option>
          <option value="Other">Other</option>
        </select>
        <button
          class="m-2 border-white border-2 "
          type="submit"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
