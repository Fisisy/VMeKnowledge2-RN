import actionTypes from './actionTypes'

export const loginSuccess = (userInfo) => {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    payload: userInfo
  }
}

export const loginFailed = (userInfo) => {
  return {
    type: actionTypes.LOGIN_FAILED,
    // payload: userInfo
  }
}

export const logout = () => dispatch => {
  dispatch(loginFailed())
}
