import { createAction, props } from "@ngrx/store";
import { UserRegister } from "src/app/model/user/UserRegister";

export const register = createAction('[register]', props<{userRegister : UserRegister}>());
export const registerSuccess =  createAction('[register]success');
export const registerFail =  createAction('[register] fail', props<{error : any}>());