import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: null,
  role:null
};

export const invite = createSlice({
  name: "invite",
  initialState,
  reducers: {
    inviteEmail: (state, action) => {
      
     return {
        email:action.payload.email,
        role:action.payload.role
      }
    },
  },
});

export const { inviteEmail } = invite.actions;

export default invite.reducer;
