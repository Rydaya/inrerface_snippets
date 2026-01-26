import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface NavItem {
  id: string;
  title: string;
  path: string;
}

interface NavState {
  items: NavItem[];
}

const initialState: NavState = {
  items: [
    { id: "hvbglhgahreughikera", title: "Home", path: "/" },
    { id: "nadjklbvaerfjkvbnaekj", title: "Products", path: "/products" },
    { id: "vjnakjvndjbvajnveanv", title: "Test2", path: "/test2" },
  ],
};

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    addNavItem: (state, action: PayloadAction<NavItem>) => {
      state.items.push(action.payload);
    },
    removeNavItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    updateNavItem: (state, action: PayloadAction<NavItem>) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id,
      );
      if (index >= 0) state.items[index] = action.payload;
    },
  },
});

export const { addNavItem, removeNavItem, updateNavItem } = navSlice.actions;
export default navSlice.reducer;
