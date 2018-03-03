import { Component } from '@angular/core';
import { MaskedInputPipe } from './masked-input.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name:string;
  inputValue;
  constructor(private mycurpipe: MaskedInputPipe) {
    this.name = 'Custom Pipe'
    this.inputValue = this.mycurpipe.transform('', '');
  }
  
  private changeModel(ev) {
    this.inputValue = ev;
  }
}
