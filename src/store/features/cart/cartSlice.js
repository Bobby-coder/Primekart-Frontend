import { getOriginalPrice } from "@/utils/getOriginalPrice";
import { createSlice } from "@reduxjs/toolkit";

// Utility function to calculate total amount and total items
const calculateTotals = (items) => {
  const totals = items.reduce(
    (acc, item) => {
      // Total price of all items (total discounted amount)
      acc.totalAmount += item.price * item.quantity;

      // Count of all items
      acc.totalItems += 1;

      // Original price of current item
      let originalPrice = getOriginalPrice(item.discountPercentage, item.price);
      // Total original price of all items
      acc.totalOriginalPrice += originalPrice * item.quantity;

      return acc;
    },
    {
      totalAmount: 0,
      totalItems: 0,
      totalOriginalPrice: 0,
    }
  );

  return totals;
};

// Initial state with recalculated totals from localStorage
function initialState() {
  // extract items from local storage
  const items = JSON.parse(localStorage.getItem("cart")) || [];

  // calculate totals for items extracted from local storage
  const { totalAmount, totalItems, totalOriginalPrice } =
    calculateTotals(items);

  // return item list and totals
  return {
    items,
    totalAmount,
    totalItems,
    totalOriginalPrice,
  };
}

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialState(),
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity += newItem.quantity;
      } else {
        state.items.push({
          ...newItem,
          quantity: newItem.quantity ? newItem.quantity : 1,
        });
      }

      // recalculate totals whenever items list is updated
      const { totalAmount, totalItems, totalOriginalPrice } = calculateTotals(
        state.items
      );

      // store updated totals in state
      state.totalAmount = totalAmount;
      state.totalItems = totalItems;
      state.totalOriginalPrice = totalOriginalPrice;

      // store updated items list in local storage whenever item list is updated
      localStorage.setItem("cart", JSON.stringify(state.items));
    },

    removeFromCart(state, action) {
      // filter or remove specified item from item list
      const id = action.payload;
      state.items = state.items.filter((item) => item.id !== id);

      // recalculate totals whenever items list is updated
      const { totalAmount, totalItems, totalOriginalPrice } = calculateTotals(
        state.items
      );

      // store updated totals in state
      state.totalAmount = totalAmount;
      state.totalItems = totalItems;
      state.totalOriginalPrice = totalOriginalPrice;

      // store updated items list in local storage whenever item list is updated
      localStorage.setItem("cart", JSON.stringify(state.items));
    },

    increaseQuantity(state, action) {
      const existingItem = state.items.find(
        (item) => item.id === action.payload
      );

      if (existingItem) {
        existingItem.quantity += 1;

        // recalculate totals whenever items list is updated
        const { totalAmount, totalItems, totalOriginalPrice } = calculateTotals(
          state.items
        );

        // store updated totals in state
        state.totalAmount = totalAmount;
        state.totalItems = totalItems;
        state.totalOriginalPrice = totalOriginalPrice;

        // store updated items list in local storage whenever item list is updated
        localStorage.setItem("cart", JSON.stringify(state.items));
      }
    },

    decreaseQuantity(state, action) {
      const existingItem = state.items.find(
        (item) => item.id === action.payload
      );

      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;

        // recalculate totals whenever items list is updated
        const { totalAmount, totalItems, totalOriginalPrice } = calculateTotals(
          state.items
        );

        // store updated totals in state
        state.totalAmount = totalAmount;
        state.totalItems = totalItems;
        state.totalOriginalPrice = totalOriginalPrice;

        // store updated items list in local storage whenever item list is updated
        localStorage.setItem("cart", JSON.stringify(state.items));
      }
    },

    clearCart(state) {
      state.items = [];

      state.totalAmount = 0;
      state.totalItems = 0;
      state.totalOriginalPrice = 0;

      localStorage.clear("cart");
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
