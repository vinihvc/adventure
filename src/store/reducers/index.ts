import { combineReducers } from 'redux'

import balance from './balance'
import factories from './factories'
import loader from './loaders'
import setting from './setting'
import user from './user'
import upgrade from './upgrade'
import manager from './manager'

/**
 * Setup Root Reducer
 */
export default combineReducers({
  balance,
  factories,
  loader,
  setting,
  user,
  upgrade,
  manager,
})
