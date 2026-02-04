import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./navSlice";
import { productsApi } from "../features/product/api";

export const store = configureStore({
  reducer: {
    nav: navReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
