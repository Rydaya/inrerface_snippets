import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    // сюда будут ваши редьюсеры
  },
});

// Типы для TS
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
