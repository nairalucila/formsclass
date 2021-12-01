import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.component.html',
  styleUrls: ['./profesor.component.scss']
})
export class ProfesorComponent implements OnInit {

  nombreCompleto = new FormControl('');
  aniosDocencia = new FormControl('');
  materias = new FormControl('');
  horaSemanales = new FormControl('');
  alumnosACargo = new FormControl('');
  institucion = new FormControl('');
  email = new FormControl('');
  

  constructor() { }


  ngOnInit(): void {
  
  }

}
