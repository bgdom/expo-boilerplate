// redux persist
import { persistCombineReducers , persistStore } from 'redux-persist'
import { autoMergeLevel2 } from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import { default as localStorage } from 'redux-persist/lib/storage'

// redux thunk
import thunk from 'redux-thunk';

// redux
import { createStore, applyMiddleware } from 'redux'

// redux logger
import logger from 'redux-logger'


const rootConfig = {
  key: 'root',
  storage: localStorage,
  stateReconciler: autoMergeLevel2,
  //blacklist: ['reactions']
}

const rootPersistReducer = persistCombineReducers(rootConfig, {
    'Test': (state = {}, action) => state
})

const store = createStore(rootPersistReducer, applyMiddleware(thunk, logger));
const persistor = persistStore(store, null, null/*resolveFunc*/);

export { store as store };
export { persistor as persistor };