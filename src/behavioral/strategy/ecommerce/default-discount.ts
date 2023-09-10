import { IDiscountStrategy } from '../model/iDiscount';

export class DefaultDiscount implements IDiscountStrategy {
	protected discount = 0;

	getDiscount(total: number): number {

		if (total >= 100 && total < 200) {
			this.discount = 10;
		} else if (total >= 200 && total < 300) {
			this.discount = 20;
		} else if (total >= 300) {
			this.discount = 30;
		}

		return total - total * (this.discount / 100);
	}
}