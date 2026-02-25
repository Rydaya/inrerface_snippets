import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./navSlice";
import { productsApi } from "../features/product/api";
import { accordionApi } from "./accordionApi";

export const store = configureStore({
  reducer: {
    nav: navReducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [accordionApi.reducerPath]: accordionApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(productsApi.middleware)
      .concat(accordionApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
