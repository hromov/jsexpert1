import { Injectable, LOCALE_ID, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable()
export class LanguageService {
  defaultLanguage: string = 'ru-RU'
  currentLanguage: string
  constructor(
    private http: HttpClient,
    @Inject(LOCALE_ID) protected localeId: string
  ) {
    //Заготовка на будущее
    switch(localeId) {
      case 'en-US':
      case 'ru-RU':
        this.currentLanguage = 'ru-RU'
        break;
      default:
        this.currentLanguage = this.defaultLanguage
    }
  }

  getMainMenu() {
    return this.http.get(`./assets/static/menu-${this.currentLanguage}.json`)
  }

  getCurrentLanguage() {
    return this.currentLanguage
  }

}
