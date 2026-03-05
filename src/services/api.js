import axios from "axios";
import { serverUrl } from "../App";

export const getCurrentUser = async () => {
  try {
    const result = await axios.get(`${serverUrl}/api/v1/user`, {
      withCredentials: true,
    });
    const data=await result.data
    console.log("resulting",data)
    return data.data;
  } catch (error) {
    console.log(error);
  }
};
