import actionTypes from '../actions/actionTypes'

const initState = {
  isLogin: false,
  token: "",
  userId: 0,
}

export default (state = initState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS :
      return {
        ...state,
        ...action.payload,
        isLogin: true,
        token: action.payload,
        // token: action.payload.token,
        // userId: action.payload.id
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