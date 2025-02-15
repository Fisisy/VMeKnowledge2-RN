import actionTypes from './actionTypes'

export const GetKnowledgeId = (userInfo) => {
  return {
    type: actionTypes.GET_KNOWLEDGE,
    payload: userInfo
  }
}