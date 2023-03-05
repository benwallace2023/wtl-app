import { createReducer, on } from "@ngrx/store";
import { LoginState } from "./LoginState";
import { recoverPassword, recoverPasswordSuccess, recoverPasswordFail, loginSuccsess, loginFail, login} from "./login.actions";
import { AppInitialState } from "../AppInitialState";

const initialState : LoginState = AppInitialState.login;
const reducer = createReducer(initialState, 

    on(recoverPassword, currentState =>{

        return {
            ...currentState,
            error: null,
            isRecoveredPassword: false,
        isRecoveringPassword: true
        };
    }),

    on(recoverPasswordSuccess, currentState =>{

        return {
            ...currentState,
            error: null,
            isRecoveredPassword: true,
        isRecoveringPassword: false
        };
    }),

    on(recoverPasswordFail, (currentState, action) =>{

        return {
            ...currentState,
            error: action.error,
            isRecoveredPassword: false,
        isRecoveringPassword: false
        };
    }),

    on(login, currentState => {
        
        return{
    ...currentState,
    error:null,
    isLoggedIn: false,
    isLogginIn: true
    }
}),

on(loginSuccsess, currentState => { 
    return{
...currentState,
error:null,
isLoggedIn: true,
isLogginIn: false
}
}),

on(loginFail, (currentState, action) => { 
    return{
...currentState,
error: action.error,
isLoggedIn: false,
isLogginIn: true
}
})
)
    export function loginReducer (state: LoginState, action: any){

        return reducer(state, action);
    }