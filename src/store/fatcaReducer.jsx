import * as actionTypes from "./actions/actionTypes";

const initialState = { companyName: "", data: null };
const COMPANYNAME = "COMPANYNAME";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_COMPANY_NAME:
      state = {
        ...state,
        companyName: action.payload,
      };
      break;
    case actionTypes.UPLOAD_FILE: 
      state = {
        ...state,
        data: action.payload,
      } 
      break;
    default:
      state = JSON.parse(sessionStorage.getItem(COMPANYNAME)) || state;
      break;
  }
  sessionStorage.setItem(COMPANYNAME, JSON.stringify(state));
  return state;
};

export default reducer;
