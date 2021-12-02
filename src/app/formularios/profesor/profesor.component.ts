import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.component.html',
  styleUrls: ['./profesor.component.scss']
})
export class ProfesorComponent implements OnInit {

  profesorInfo: FormGroup;
  caracterInvalid: boolean;
  caracterInvalidBis: boolean;
  enviado: boolean;

  constructor(private fb: FormBuilder) {
    this.caracterInvalid = true;
    this.caracterInvalidBis = true;
    this.enviado = false;
    
    this.profesorInfo = this.fb.group({
      nombreCompleto: ['', Validators.required],
      aniosDocencia: ['', Validators.required],
      materias: ['matematica', Validators.required],
      horaSemanales: ['Seleccione cantidad de horas', Validators.required],
      alumnosACargo: ['', Validators.required],
      institucion: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    })
  }

  ngOnInit(): void {

  }

  onSubmit() {
    console.log(this.profesorInfo.value);
    this.enviado = true;
    this.onResetForm();
  }

  keyPressNumbers(event: any) {
    var charCode = (event.which) ? event.which : event.keyCode;
    // Only Numbers 0-9
    if ((charCode < 48 || charCode > 57)) {
      event.preventDefault();
      this.caracterInvalid = false;
      this.caracterInvalidBis = false
      return false;
    } else {
      this.caracterInvalid = true;
      this.caracterInvalidBis = true;
      return true;
    }
  }

  onResetForm() {
    this.profesorInfo.reset();
  }


}
