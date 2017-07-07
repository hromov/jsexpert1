import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Каталог фильмов';
  links = [
    { path: '/', icon: 'home', label: 'Главная'},
    { path: '/popular', icon: 'list', label: 'Популярные фильмы'},
    { path: '/favorites', icon: 'star', label: 'Избранные'}
    /*,
    { path: '/profile', icon: 'person', label: 'Профиль'}
    */
  ];

}
