import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router'

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {
  loading: boolean
  constructor(private router: Router) {
    router.events.filter(event => event instanceof NavigationStart)
      .subscribe(event => this.loading = true)
    router.events.filter(event => event instanceof NavigationEnd)
      .subscribe((event) => {
        window.scroll(0,0);
        this.loading = false
      })
  }

  ngOnInit() {
  }

}
