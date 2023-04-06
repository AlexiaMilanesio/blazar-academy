import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-number-container',
  templateUrl: './number-container.component.html',
  styleUrls: ['./number-container.component.css']
})

export class NumberContainerComponent {
  @Input() count = 0;
}
