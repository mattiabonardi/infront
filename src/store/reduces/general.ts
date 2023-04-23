import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Device, Viewport } from "@/types/general";

/**
 * State interfaces
 */
interface GeneralState {
  viewport: Viewport;
}

/**
 * Initial state
 */
const initialState: GeneralState = {
  viewport: {
    width: 414,
    height: 896,
    device: Device.DEFAULT,
  },
};

/**
 * General Slice
 */
const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    /**
     * Set viewport value
     * @param state
     * @param action
     */
    setViewport(state, action: PayloadAction<{ viewport: Viewport }>) {
      state.viewport = action.payload.viewport;
    },
  },
});

// export actions
export const { setViewport } = generalSlice.actions;

// export selectors
/**
 * Return the state of viewport
 * @param state
 * @returns
 */
export const getViewport = (state: RootState): Viewport =>
  state.general.viewport;

// export reducer
const reducer = generalSlice.reducer;
export default reducer;
