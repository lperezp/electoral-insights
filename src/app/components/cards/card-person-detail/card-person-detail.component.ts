import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-person-detail',
  templateUrl: './card-person-detail.component.html',
  styleUrls: ['./card-person-detail.component.scss']
})
export class CardPersonDetailComponent {
  @Input() person = {
    name: '',
    description: '',
    photo: ''
  };
}
