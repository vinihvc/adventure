import { combineReducers } from 'redux'

import balance from './balance'
import factories from './factories'
import loaders from './loaders'
import settings from './settings'

/**
 * Setup Root Reducer
 */
export default combineReducers({
  balance,
  factories,
  loaders,
  settings,
})
