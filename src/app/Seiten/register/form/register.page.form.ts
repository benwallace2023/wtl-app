import { FormGroup, FormBuilder, Validators, ValidatorFn } from "@angular/forms";


export class RegisterPageForm {
    private formBuilder: FormBuilder;
    private form: FormGroup;

  
  defaultDate = "2022-06-30";
  constructor(formBuilder: FormBuilder ) { 
    this.formBuilder = formBuilder;
    this.form = this.createForm();
 }
 private createForm(): FormGroup{
   let form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      dob: [this.defaultDate],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      password: ['', [Validators.required,Validators.minLength(8)]],
      repeatPassword: [],
      adress: this.formBuilder.group({  
          street: [],
          Number: [],
          Zipcode: [],
          District: ['',[Validators.required]],
          Town: ['',[Validators.required]],
      })
    });
    form.get('repeatPassword')?.setValidators(mathcPasswordAndRepeatPassword(form));
    return form;
  }

  getForm(): FormGroup{
     return this.form;
  }

  getDate(e: any) {
    let date = new Date(e.target.value).toISOString().substring(0, 10);
    this.form.get('dob')?.setValue(date, {
      onlyself: true
    })
  }
  get errorControl() {
    return this.form.controls;
  }
}

function mathcPasswordAndRepeatPassword(form: FormGroup): ValidatorFn{
const password = form.get('password');
const repeatPassword = form.get('repeatpassword');

const Validator = ()=> {
    return password?.value == repeatPassword?.value  ? null : {isntMatching: true}
};
return Validator;
}
 

