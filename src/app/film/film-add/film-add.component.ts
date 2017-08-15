import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Film } from '../../shared/model'
import { FilmAddService } from './film-add.service'

@Component({
  selector: 'app-film-add',
  templateUrl: './film-add.component.html',
  styleUrls: ['./film-add.component.css']
})
export class FilmAddComponent implements OnInit {
  newFilm: FormGroup
  constructor(
    private fb: FormBuilder,
    private fs: FilmAddService
  ) { }
  ngOnInit() {
    this.createForm()
  }

  createForm() {
    this.newFilm = this.fb.group({
      title: ['', Validators.required],
      revenue: ['', Validators.pattern(/^[0-9]*$/)],
      runtime: ['', Validators.pattern(/^[0-9]*$/)],
    })
  }

  createFilm() {
    if(this.newFilm.valid) {
      this.fs.addNewFilm(this.newFilm.value)
      this.newFilm.reset()
    }    
  }

}
