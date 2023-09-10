import { IDiscountStrategy } from '../model/iDiscount';

export class NewDiscount implements IDiscountStrategy {
	protected discount = 0;

	getDiscount(total: number): number {
		this.discount = 5;
		return total - total * (this.discount / 100);
	}

	getTeset() {
		console.log('teste');
        
	}
}