import actionTypes from './actionTypes'

export const increment = (value) => {
  return {
    type: actionTypes.COUNTER_INCREMENT,
    payload: value
  }
}

export const decrement = (value) => {
  return {
    type: actionTypes.COUNTER_DECREMENT,
    payload: value
  }
}