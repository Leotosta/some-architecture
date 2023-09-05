import { ICarrier } from '../model/carrier';


export class EnterpriseCarrier implements ICarrier {
	constructor(public carrierName: string, private readonly customer: string) {}

	pickup(): void {
		console.log(`My enterprise'll pick up the customer ${this.customer} by ${this.carrierName}`);
        
	}
 
}