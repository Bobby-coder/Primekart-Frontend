import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: JSON.parse(localStorage.getItem("saveForLater")) || [],
  totalItems: JSON.parse(localStorage.getItem("saveForLater"))?.length || 0,
};

export const saveForLaterSlice = createSlice({
  name: "saveForLater",
  initialState,
  reducers: {
    addToSavedItems: function (state, action) {
      // check if item is already present in saved items
      const existingItem = state.items.find(
        ({ id }) => id === action.payload.id
      );

      // if not present, then add otherwise not
      if (!existingItem) {
        state.items.push(action.payload);
      }

      // update total items whenever saved item list changes
      state.totalItems += 1;

      // store updated saved items list in the local storage whenever saved items list is updated
      localStorage.setItem("saveForLater", JSON.stringify(state.items));
    },

    removeFromSavedItems: (state, action) => {
      // filter item based on specified id
      state.items = state.items.filter(({ id }) => action.payload !== id);

      // update total items whenever saved item list changes
      state.totalItems -= 1;

      // store updated saved items list in the local storage whenever saved items list is updated
      localStorage.setItem("saveForLater", JSON.stringify(state.items));
    },
  },
});

export const { addToSavedItems, removeFromSavedItems } =
  saveForLaterSlice.actions;
export default saveForLaterSlice.reducer;
