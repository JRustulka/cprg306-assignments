"use client";

import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    if (quantity < 20) setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <div class="flex-1 flex-row bg-white text-black w-64 p-3 border-black border-2">
      <h1>{quantity}</h1>
      <button
        disabled={quantity === 20}
        class="w-8 m-2 border-black border-2 bg-green-700 text-white hover:bg-green-900 focus:ring-2 focus:ring-grey-700 disabled:opacity-50"
        onClick={increment}
      >
        +
      </button>
      <button
        disabled={quantity === 1}
        class="w-8 m-2 border-black border-2 bg-red-500 text-white hover:bg-red-900 focus:ring-2 focus:ring-grey-700 disabled:opacity-50"
        onClick={decrement}
      >
        -
      </button>
    </div>
  );
}
