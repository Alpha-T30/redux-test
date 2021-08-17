import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: {
      name: "Enamul",
      email: "enamul@gmail.com",
    },
    pending: null,
    error: false,
  },
  reducers: {
    startUpdate: (state) => {
      state.pending = true;
    },

    updateSuccess: (state, action) => {
      state.pending = false;
      state.userInfo = action.payload;

      state.error = false;
    },

    updateFail:(state)=>{
      state.error=true 
      state.pending=null
    }, 
    deleteUser:(state=>state=null)
     
  },
});
export const { startUpdate,updateFail,updateSuccess  , deleteUser} = userSlice.actions;

export default userSlice.reducer;
