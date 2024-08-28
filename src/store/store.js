import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./features/category/categorySlice.js";
import sortingReducer from "./features/sorting/sortingSlice.js";
import cartReducer from "./features/cart/cartSlice.js";
import wishlistReducer from "./features/wishlist/wishlistSlice.js";
import saveForLaterReducer from "./features/saveForLater/saveForLaterSlice.js";

export const store = configureStore({
  reducer: {
    category: categoryReducer,
    sorting: sortingReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
    saveForLater: saveForLaterReducer,
  },
});
