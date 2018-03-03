import { Directive, HostListener, ElementRef, OnInit, Input } from "@angular/core";
import { MaskedInputPipe } from "./masked-input.pipe";

@Directive({ selector: "[maskedInputFormatter]" })
export class MaskedInputFormatterDirective implements OnInit {

  private el: any;
  @Input('maskedInputFormatter') type: string;

  constructor(
    private elementRef: ElementRef,
    private currencyPipe: MaskedInputPipe,
  ) {
    this.el = this.elementRef.nativeElement;

  }

  ngOnInit() {
    this.el.value = this.currencyPipe.transform(this.el.value, this.type);
  }

  @HostListener("focus", ["$event.target.value"])
  onFocus(value) {
    // this.el.value = this.currencyPipe.parse(value, this.type); // opossite of transform
  }

  @HostListener("window:keyup", ["$event.target.value"])
  keyEvent(value) {
    console.log(value);
    this.el.value = this.currencyPipe.transform(value, this.type);
  }

}