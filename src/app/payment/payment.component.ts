import { Component, OnInit } from '@angular/core';
//import { PaymentFormModel } from '../shared/model'
import { ValidationMessages } from '../shared/messages'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  monthes: Array<number>
  years: Array<number>
  paymentForm: FormGroup
  done: boolean
  constructor(
    private formBuilder: FormBuilder
  ) { }

  formErrors = {
    phone: '',
    amount: '',
    email: '',
    card: '',
    cvv: ''
  }

  ngOnInit() {
    let currentYear = new Date().getFullYear()
    this.monthes = Array.apply(null, Array(12)).map((_, i) => i+1)
    this.years = Array.apply(null, Array(50)).map((_, i) => i+currentYear)
    this.buildLoginForm()
  }

  buildLoginForm() {
    this.paymentForm = this.formBuilder.group({
      phone: [ '', [
        Validators.required,
        Validators.pattern('([0-9- .]*){7,13}')
      ]],
      amount: [ 5, [
        Validators.required,
        Validators.min(5),
        Validators.max(5000)
      ]],
      email: ['', [
        Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
      ]],
      card: ['', [
        Validators.required,
        Validators.pattern('[0-9]{16}')
      ]],
      cvv: ['', [
        Validators.required,
        Validators.pattern('[0-9]{3}')
      ]],
      month: [1, [
        Validators.required
      ]],
      year: [new Date().getFullYear(), [
        Validators.required
      ]]

    })
    this.paymentForm.valueChanges.subscribe(() => this.onValueChanged())
  }

  pay() {
    this.done = true
  }

  onValueChanged(data?: any) {
    if (!this.paymentForm) { return; }
    const form = this.paymentForm;
    for (const field in this.formErrors) {
      // clear previous error message (if any)
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

}
