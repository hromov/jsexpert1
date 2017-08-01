import { Component, OnInit } from '@angular/core'
import { PaymentFormModel } from './payment.model'

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  monthes: Array<number>
  years: Array<number>
  paymentModel: PaymentFormModel
  amountValid: boolean
  done: boolean
  constructor() { }

  ngOnInit() {
    let currentYear = new Date().getFullYear()
    this.monthes = Array.apply(null, Array(12)).map((_, i) => i+1);
    this.years = Array.apply(null, Array(50)).map((_, i) => i+currentYear);
    this.paymentModel = new PaymentFormModel('', 5, '', undefined, undefined, new Date().getMonth()+1, currentYear)
    this.amountValid = true
  }

  pay() {
    this.done = true
  }

  //Пришлось добавить т.к. стандартная проверка min/max не работает
  checkAmount(amount:number) {
    this.amountValid = (amount >= 5 && amount <= 5000)
  }

}
