import { createSlice } from "@reduxjs/toolkit";
export const jwtSlice = createSlice({
  name: "jwt",
  initialState: {
    token: "",
    user_id: "",
  },
  reducers: {
    addJwtToken: (state, action) => {
      state.token = action.payload.token;
    },
    removeJwtToken: (state) => {
      state.token = "";
    },
  },
});

export const { addJwtToken, removeJwtToken } = jwtSlice.actions;
export default jwtSlice.reducer;
