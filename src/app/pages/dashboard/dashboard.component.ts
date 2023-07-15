import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PersonMock } from 'src/app/core/person.mock';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  person = PersonMock;
  personSelect = {
    name: 'Pedro Castillo Terrones',
    description: 'José Pedro Castillo Terrones es un profesor y político peruano que se desempeñó como presidente del Perú desde el 28 de julio de 2021 hasta la declaración de su «permanente incapacidad moral» tras su intento de autogolpe de Estado el 7 de diciembre de 2022.​',
    photo: './../../assets/img/pedro-castillo.jpeg'
  };

  formSelect: FormGroup = this.fb.group({
    personSelected: [null]
  });

  constructor(private fb: FormBuilder) { }

  onChangePerson() {
    this.personSelect = this.formSelect.value.personSelected
  }
}
