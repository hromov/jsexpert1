import { Component, OnInit } from '@angular/core'
import { GuardService } from '../guard.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ValidationMessages } from '../shared/messages'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup
  constructor(
    private guardService: GuardService,
    private formBuilder: FormBuilder
  ) { }

  formErrors = {
    'email': '',
    'password': ''
  };

  ngOnInit() {
    this.buildLoginForm()
  }

  buildLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', [
        Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
      ]],
      password: ['', [
        Validators.required,
        Validators.pattern('(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{10,}')
      ]]
    })
    this.loginForm.valueChanges.subscribe(data => this.onValueChanged(data))
    this.onValueChanged()
  }

  onValueChanged(data?: any) {
    if (!this.loginForm) { return; }
    const form = this.loginForm;
    for (const field in this.formErrors) {
      this.formErrors[field] = '';
      const control = form.get(field);
 
      if (control && control.dirty && !control.valid) {
        const messages = ValidationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

  login() {
    this.guardService.login(this.loginForm.value)
  }

}
