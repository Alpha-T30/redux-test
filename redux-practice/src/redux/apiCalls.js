import { startUpdate, updateSuccess, updateFail } from "./reduxslice";
import axios from "axios" ; 
export const updateUser = async (user, dispatch) => {
  dispatch(startUpdate());

  try {
      const res = await axios.post("http://localhost:8800/api/users/update/",({
          name:user.name,
          email:user.email
      })) ; 
      dispatch(updateSuccess(res.data)) 
  } catch (error) {
     dispatch(updateSuccess()) ; 
  }
};
