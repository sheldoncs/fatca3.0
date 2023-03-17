import axios from "axios";
import { receiveCompanyName, receiveUploadResponseResult } from "../store/actions/fatcaAction";
import {API_URL} from  "../environment/environment";

const abortController = new AbortController();
const signal = abortController.signal;

export const uploadFile = (formData) => {
  
  let url = "http://localhost:5000/api/File/FileUpload";
 
  return (dispatch) => {
    axios({
      method: "post",
      url,
      data: formData,
    })
      .then((response) => {
        dispatch(receiveUploadResponseResult({status:200}));
        const url = window.URL.createObjectURL(
          new Blob([response.data]),
        );
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute(
          'download',
          `FileName.xml`,
        );
    
        // Append to html link element page
        document.body.appendChild(link);
    
        // Start download
        link.click();
    
        // Clean up and remove the link
        link.parentNode.removeChild(link);

      })
      .catch((err) => {
        console.log(err);
      });
    
     }
};
  
export const getCompanyName = (fileType) => {

console.log("API_URL",API_URL);

let url = `http://${API_URL}/company?fileType=` + fileType;


  return (dispatch) => {
    axios({
      method: "get",
      url,
    })
      .then((response) => {
        console.log(response.data);
        dispatch(receiveCompanyName(response.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

  