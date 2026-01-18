import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;

      // TO check if item already exists
      const existingItem = state.items.find((i) => i.id === item.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }
    },

    removeItem: (state, action) => {
      const itemId = action.payload;

      state.items = state.items.filter((i) => i.id !== itemId);
    },

    decreaseItem: (state, action) => {
      const itemId = action.payload;
      const existingItem = state.items.find((i) => i.id === itemId);

      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
        } else {
          state.items = state.items.filter((i) => i.id !== itemId);
        }
      }
    },

    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, decreaseItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;


/*
    cartSlice = {

        actions:{
            addItem:{
            },
            removeItem: {
            },
            clearItem:{
            }
        },
        
        reducers
    }
*/



/*import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      // mutating the state directly
      state.items.push(action.payload);
      // console.log("Item Added:", action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    clearCart: (state) => {
      //state.items = [];
      state.items.length = 0;
    },
  },
});
*/