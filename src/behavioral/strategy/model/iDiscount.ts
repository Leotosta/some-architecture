
export interface IDiscountStrategy {
	getDiscount(total: number): number;
}