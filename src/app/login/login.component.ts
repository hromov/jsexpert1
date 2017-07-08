import { Component, OnInit } from '@angular/core';
import { GuardService } from '../guard.service'
import { LoginFormModel } from '../shared/model'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private guardService: GuardService) { }

  ngOnInit() {
  }

  login(loginForm: LoginFormModel) {
    this.guardService.login(loginForm)
  }

}
