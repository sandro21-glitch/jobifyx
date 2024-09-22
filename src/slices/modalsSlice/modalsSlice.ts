import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ModalState {
  postingAd: boolean;
}

const initialState: ModalState = {
  postingAd: false,
};

export const modalsSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    setPostingAd: (state, action: PayloadAction<boolean>) => {
      state.postingAd = action.payload;
    },
  },
});

export const { setPostingAd } = modalsSlice.actions;

export default modalsSlice.reducer;
