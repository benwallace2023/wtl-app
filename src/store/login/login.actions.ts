import { createAction, props } from "@ngrx/store";
import { User } from "src/app/model/user/User";

export const recoverPassword = createAction("[Passwort wiederherstellen]",props<{email: string}>());
export const recoverPasswordSuccess = createAction("[Passwort wiederherstellen] Erfolgreich");
export const recoverPasswordFail = createAction("[Neues Passwort anlegen] Fehlgeschlagen", props<{error: any}>());

export const login = createAction("[login]",props<{email: string, password:string}>());
export const loginSuccsess = createAction("[login]success", props<{user: User }>());
export const loginFail = createAction("[login]fail", props<{error:any}>());