import {combineReducers} from 'redux'
import Counter from './Counter'

import User from './User'
import GetKnowledgeId from './GetKnowledgeId'

export default combineReducers({
  Counter,
  User,
  GetKnowledgeId,
})