import { Pipe, PipeTransform } from "@angular/core";

const PADDING = "000000";

@Pipe({ name: "myCurrency" })
export class MaskedInputPipe implements PipeTransform {

  private lastValue: string;
  constructor() {
    // TODO comes from configuration settings
    this.lastValue = ""
  }

  transform(value: string, type: string): any {
		console.log(type);

		if(!value) {
			return value;
		}

		var fractionPart = "";

		var digits = value.split("");
		var formatChar = " ";
		var breakingPoint = [];
		
		if (type == 'mobileNum') {
			breakingPoint = [3, 7];
		}

		for (var bpi = 0; bpi < breakingPoint.length; bpi++) {
			var bp = breakingPoint[bpi];
			if (digits.length > bp) {
				digits.splice(bp, 0, formatChar);
			}
		}
		return digits.join("");
	
  }
  parse(value: string, type: string): any {
	// if (this.lastValue && this.lastValue === value) {
	// 	return value;
	// }

	// var selectionStart = elem[0].selectionStart;
	// var selectionEnd = elem[0].selectionEnd;
	// var beforeCursor = value.substring(0, selectionStart);
	// var nonDigits = beforeCursor.replace(/\d/g, "");
	// selectionStart -= nonDigits.length;
	// selectionEnd -= nonDigits.length;

	// var digitsOnly = value.replace(/\D/g, "");
	// var digits = digitsOnly.split("");

	// var formatChar = " "//"—";
	// var breakingPoint = [];
	// if (type == 'mobileNum') {	
	// 	breakingPoint = [3, 7];
	// }	

	// for (var bpi = 0; bpi < breakingPoint.length; bpi++) {
	// 	var bp = breakingPoint[bpi];
	// 	if (digits.length > bp) {
	// 		digits.splice(bp, 0, formatChar);
	// 	}
	// 	if (selectionStart > bp) {
	// 		selectionStart++;
	// 	}

	// 	if (selectionEnd > bp) {
	// 		selectionEnd++;
	// 	}
	// }


	// this.lastValue = digits.join("");

	// ngModelController.$setViewValue(this.lastValue);
	// ngModelController.$render();

	// elem[0].selectionStart = selectionStart;
	// elem[0].selectionEnd = selectionEnd;

	// return digitsOnly;
  }

}