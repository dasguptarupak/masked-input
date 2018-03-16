import { Component, ViewChild } from '@angular/core';
import { MaskedInputPipe } from './masked-input.pipe';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  name:string;
  @ViewChild('f') signUpUser: NgForm;

  constructor(private mycurpipe: MaskedInputPipe) {
    this.name = 'Masked Input';
  }

  onClear() {
    this.signUpUser.setValue({
        numeric: '',
        zip_code: '',
        ssn: '',
        phone_number: '',
        ip_address: ''
      });
  }

  onSubmit() {
    console.log('Print values >>>', this.signUpUser.value);
  }
}
