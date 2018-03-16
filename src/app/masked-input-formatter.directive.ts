import { Directive, HostListener, ElementRef, OnInit, Input } from "@angular/core";
import { MaskedInputPipe } from "./masked-input.pipe";

@Directive({ selector: "[maskedInputFormatter]" })
export class MaskedInputFormatterDirective implements OnInit {

  private el: any;
  @Input('maskedInputFormatter') type: string;

  constructor(
    private elementRef: ElementRef,
    private maskedInputPipe: MaskedInputPipe,
  ) {
    this.el = this.elementRef.nativeElement;

  }

  ngOnInit() {
    this.el.value = this.maskedInputPipe.transform(this.el.value, this.type);
  }

  @HostListener("focus", ["$event.target.value"])
  onFocus(value) {
    // this.el.value = this.maskedInputPipe.parse(value, this.type);
  }

  @HostListener("blur", ["$event.target.value"])
  keyEvent(value) {
    console.log(value);
    this.el.value = this.maskedInputPipe.transform(value, this.type);
  }

}