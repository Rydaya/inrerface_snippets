import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./navSlice";
import { productsApi } from "../features/product/api";
import { accordionApi } from "./accordionApi";
import { tabsApi } from "./tabsApi";
import { menuApi } from "./menuApi";

export const store = configureStore({
  reducer: {
    nav: navReducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [accordionApi.reducerPath]: accordionApi.reducer,
    [tabsApi.reducerPath]: tabsApi.reducer,
    [menuApi.reducerPath]: menuApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(productsApi.middleware)
      .concat(accordionApi.middleware)
      .concat(tabsApi.middleware)
      .concat(menuApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
