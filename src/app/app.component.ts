import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  projectName: string = 'Films App';
  links = [
    { path: '/', icon: 'home', label: 'Главная'},
    { path: '/films', icon: 'videocam', label: 'Фильмы'},
  ];
}
