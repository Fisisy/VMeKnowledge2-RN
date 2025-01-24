import actionTypes from '../actions/actionTypes'

const initState = {
  isLogin: false,
  token: "",
}

export default (state = initState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS :
      return {
        ...state,
        ...action.payload,
        isLogin: true,
        token: action.payload
      }
    case actionTypes.LOGIN_FAILED:
      return {
        isLogin: false,
        token: ""
      }
    default: 
      return state;
  }
}