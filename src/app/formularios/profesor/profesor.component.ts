import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.component.html',
  styleUrls: ['./profesor.component.scss']
})
export class ProfesorComponent implements OnInit {

  //profesorInfo: FormGroup;

  profesorInfo = this.fb.group({
    nombreCompleto: ['' , Validators.required],
    aniosDocencia: ['' , Validators.required],
    materias: ['' , Validators.required],
    horaSemanales: ['' , Validators.required],
    alumnosACargo: ['' , Validators.required],
    institucion: ['' , Validators.required],
    email: ['' , Validators.required],
  })

  constructor(private fb: FormBuilder) {

  }


  ngOnInit(): void {
    this.profesorInfo.valueChanges.subscribe({
      next: (change) => {
        console.log('es invalido el wacho', this.profesorInfo.invalid)
        console.log('es valido el wacho', this.profesorInfo.valid)
        console.log(change)

      }
    })

  }

  onSubmit() {
    console.log(this.profesorInfo.value);
  }


}
