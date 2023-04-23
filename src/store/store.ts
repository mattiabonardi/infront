import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import generalReducer from "./reduces/general";

/**
 * Store configuration
 */
export const store = configureStore({
  reducer: {
    general: generalReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
