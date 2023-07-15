import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-indication',
  templateUrl: './card-indication.component.html',
  styleUrls: ['./card-indication.component.scss']
})
export class CardIndicationComponent {
  @Input() title = '';
  @Input() data = [
    {
      positive: 10,
      negative: 20,
      neutro: 30
    },
  ];
}
