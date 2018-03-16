import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "maskedInput" })
export class MaskedInputPipe implements PipeTransform {

  private lastValue: string;
  constructor() {}

  transform(value: string, type: string): any {
		console.log(type);

		if(!value) {
			return value;
		}

		var fractionPart = "";

		var digits = value.split("");
		var formatChar = "-";
		var breakingPoint = [];

		switch (type) {
			case 'zipCode' : 	 breakingPoint = [3];
							 	 break;
			case 'ssn' : 	 	 breakingPoint = [3, 6];
							 	 break;
			case 'phoneNumber' : breakingPoint = [3, 7];
							     break;
			case 'ipAddress' :   breakingPoint = [3, 7, 11];
								 formatChar = ".";
							     break;							 
		}
		for (var bpi = 0; bpi < breakingPoint.length; bpi++) {
			var bp = breakingPoint[bpi];
			if (digits.length > bp) {
				digits.splice(bp, 0, formatChar);
			}
		}
		return digits.join("");
	
  }
//   parse(value: string, type: string): any { }

}