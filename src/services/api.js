import axios from "axios";
import { serverUrl } from "../App";
import { setUserData } from "../redux/userSlice";

export const getCurrentUser = async (dispatch) => {
  try {
    const result = await axios.get(`${serverUrl}/api/v1/user`, {
      withCredentials: true,
    });
    const data = await result.data;
    console.log("resulting", data);
   dispatch(setUserData(data?.data));
  
  } catch (error) {
    console.log(error);
    dispatch(setUserData(null))
  }
};

export const logoutUser = async (dispatch) => {
  try {
    const result = await axios.get(`${serverUrl}/api/v1/auth/logout`, {
      withCredentials: true,
    });
    const data = await result.data;

    dispatch(setUserData(null));
  } catch (error) {
    console.log(error);
  }
};
