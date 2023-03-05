import { Component, OnInit, OnDestroy } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { AppState } from 'src/store/AppState';
import { RegisterState } from 'src/store/register/RegisterState';
import { RegisterPageForm } from './form/register.page.form';
import { show,hide } from 'src/store/loading/loading.actions';
import { register } from 'src/store/register/register.actions';
import { login } from 'src/store/login/login.actions';
import { Subscription } from 'rxjs';
import { FormBuilder } from '@angular/forms';



@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit, OnDestroy {

  registerForm! : RegisterPageForm;
  registerStateSubscription! : Subscription;

  constructor(private formBuilder: FormBuilder, private store: Store<AppState>,
    private toastController : ToastController) { }

  ngOnInit() {
    this.createForm;
    this.watchRegisterState();
  }

  ngOnDestroy(){
    this.registerStateSubscription.unsubscribe();
  }

  register(){ 
    this.registerForm.getForm().markAllAsTouched();
    if(this.registerForm.getForm().valid){
      this.store.dispatch(register({userRegister: this.registerForm.getForm().value})); 
    }
  }

  private createForm(){
    this.registerForm = new RegisterPageForm(this.formBuilder);
  }

  private watchRegisterState(){
   this.registerStateSubscription = this.store.select('register').subscribe ( state => {
      this.toggleLoading(state);
     this.onRegistered(state);
     this.onError(state);
      
    })
  }
  private onRegistered(state: RegisterState){
    if(state.isRegistered){
      this.store.dispatch(login({
email:this.registerForm.getForm().value.email,
password:this.registerForm.getForm().value.email
      }))
    }

  }
  
  private onError(state: RegisterState){
        if (state.error){
    
         this.toastController.create({
          message: state.error.message,
          duration: 3000,
          header: "register not done"
        }).then (toast => toast.present());
      }
  }
  private toggleLoading(state: RegisterState){
    if(state.isRegistering){
    this.store.dispatch(show()) ; 
  } else{
    this.store.dispatch(hide()) ; 
  }
  }
}
