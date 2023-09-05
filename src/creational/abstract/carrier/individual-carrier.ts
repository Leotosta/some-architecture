import { ICarrier } from '../model/carrier';


export class IndividualCarrier implements ICarrier {
	constructor(public carrierName: string, private readonly customer: string) {}

	pickup(): void {
		console.log(`I'll pick up the customer ${this.customer} by ${this.carrierName}`);
        
	}
 
}