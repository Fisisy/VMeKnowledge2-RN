import actionTypes from '../actions/actionTypes'

const initState = {
  knowledgeId: 0,
}

export default (state = initState, action) => {
  switch (action.type) {
    case actionTypes.GET_KNOWLEDGE :
      return {
        ...state,
        ...action.payload,
        knowledgeId: action.payload
      }
    default: 
      return state;
  }
}