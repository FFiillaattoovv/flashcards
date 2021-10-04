import {applyMiddleware, combineReducers, createStore} from 'redux';
import {authReducer} from './authReducer';
import {profileReducer} from './profileReducer';
import {restoreReducer} from './restoreReducer';
import {signUpReducer} from "./signUpReducer";
import thunkMiddleware from 'redux-thunk'
import {cardsReducer} from "./cardsReducer";
import {packsReducer} from "./packsReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    profile: profileReducer,
    restore: restoreReducer,
    signUp: signUpReducer,
    cards: cardsReducer,
    packs: packsReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type AppRootStateType = ReturnType<typeof rootReducer>


//@ts-ignore
window.store = store;
