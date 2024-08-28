import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: JSON.parse(localStorage.getItem("wishlist")) || [],
  totalItems: JSON.parse(localStorage.getItem("wishlist"))?.length || 0,
};

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      // extract item id and find it in the current wishlist
      const { id: itemId } = action.payload;
      const existingItem = state.items.find(({ id }) => id === itemId);

      // If item is not present, then add it
      if (!existingItem) {
        state.items.push(action.payload);

        // update total items whenever wishlist changes
        state.totalItems += 1;
      }

      // store updated wishlist in the local storage whenever wishlist is updated
      localStorage.setItem("wishlist", JSON.stringify(state.items));
    },

    removeFromWishlist: (state, action) => {
      // filter item based on specified id
      state.items = state.items.filter(({ id }) => id !== action.payload);

      // update total items whenever wishlist changes
      state.totalItems -= 1;

      // store updated wishlist in the local storage whenever wishlist is updated
      localStorage.setItem("wishlist", JSON.stringify(state.items));
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
