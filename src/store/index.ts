import { configureStore } from '@reduxjs/toolkit'

// import { persistStore, persistReducer } from 'redux-persist'

// import storage from 'redux-persist/lib/storage'

import thunk from 'redux-thunk'

// import { LOCAL_STORAGE_KEY } from '@/constants/local-storage'

import reducers from './reducers'

// const persistConfig = {
//   key: LOCAL_STORAGE_KEY,
//   storage,
// }

// const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
  reducer: reducers,
  // reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
})

// export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
