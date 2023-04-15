import { Component } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'app-address-inputs',
  templateUrl: './address-inputs.component.html',
  styleUrls: ['./address-inputs.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }] // dependency injection - providers
})

export class AddressInputsComponent {

}
