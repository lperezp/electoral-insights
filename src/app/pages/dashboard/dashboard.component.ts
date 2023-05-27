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
    name: '',
    description: '',
    photo: ''
  };

  formSelect: FormGroup = this.fb.group({
    personSelected: [null]
  });

  constructor(private fb: FormBuilder) { }

  onChangePerson() {
    this.personSelect = this.formSelect.value.personSelected
  }
}
