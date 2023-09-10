import { EcommerceProduct } from './ecommerce-product';

export class DiscountStrategy {
	protected discount = 0;
  
	getDiscount(cart: EcommerceProduct): number {
	  return cart.getTotal();
	}
}