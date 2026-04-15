import axios from "axios";
import { serverUrl } from "../App";
import { setUserData } from "../redux/userSlice";

export const getCurrentUser = async (dispatch) => {
  try {
    const result = await axios.get(`${serverUrl}/user`, {
      withCredentials: true,
    });
    const data = await result.data;
    console.log("resulting", data);
    dispatch(setUserData(data?.data));
  } catch (error) {
    console.log(error);
    dispatch(setUserData(null));
  }
};

export const logoutUser = async (dispatch) => {
  try {
    const result = await axios.get(`${serverUrl}/auth/logout`, {
      withCredentials: true,
    });
    const data = await result.data;

    dispatch(setUserData(null));
  } catch (error) {
    console.log(error);
  }
};

export const generateNotes = async (payload) => {
  try {
    const result = await axios.post(`${serverUrl}/notes`, payload, {
      withCredentials: true,
    });

    console.log("result", result.data);
    return result.data.data;
  } catch (error) {
    console.log("error", error);
  }
};

export const downloadPdf=async(result)=>{
  try {
    const response=await axios.post(`${serverUrl}/pdf-download`,{result},{responseType:"blob",withCredentials:true})
    const blob=new Blob([response.data],{
      type:"application/pdf"
    })

    const url=window.URL.createObjectURL(blob)
    const link=document.createElement("a")
    link.href=url
    link.download="ExamNotesAI.pdf"
    link.click()


    window.URL.revokeObjectURL(url)

  } catch (error) {
    console.error("error in download pdf",error)
  }
}
