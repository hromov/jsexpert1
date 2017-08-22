import { Injectable, Component } from '@angular/core';
import { MdSnackBar } from '@angular/material';
@Injectable()
export class SnackService {

  constructor(private snackBar: MdSnackBar) { }

  public message(text: string, duration?: number) {
    this.snackBar.open(text, '', {
      duration: duration || 3000
    })
  }

  public dismiss() {
    this.snackBar.dismiss()
  }
}
