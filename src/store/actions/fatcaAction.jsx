import * as actionTypes from "./actionTypes";

export const receiveCompanyName = (companyName) => ({
  type: actionTypes.SET_COMPANY_NAME,
  payload: companyName,
});
export const receiveUploadResponseResult = (data) => ({
  type: actionTypes.UPLOAD_FILE,
  payload: data,
});
