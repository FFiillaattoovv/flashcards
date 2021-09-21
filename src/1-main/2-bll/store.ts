import {combineReducers, createStore} from 'redux';
import {authReducer} from './authReducer';
import {profileReducer} from './profileReducer';
import {restoreReducer} from './restoreReducer';
import {signUpReducer} from "./signUpReducer";
import thunkMiddleware from 'redux-thunk'

const rootReducer = combineReducers({
    auth: authReducer,
    profile: profileReducer,
    restore: restoreReducer
})

export const store = createStore(rootReducer);

export type AppRootStateType = ReturnType<typeof rootReducer>


//@ts-ignore
window.store = store;
