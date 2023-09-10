import { IDiscountStrategy } from '../model/iDiscount';
import { IEcommerceProduct } from '../model/iecomerce-product';

export class EcommerceProduct {
	private products: IEcommerceProduct[] = [];
	private _discountStrategy: IDiscountStrategy;

	set discount(discount: IDiscountStrategy) {
		this._discountStrategy = discount;
	}

	addProducts(...products: IEcommerceProduct[] ) {
		products.forEach((product) => {
			this.products.push(product);
		});
	}

	getProducts(): IEcommerceProduct[] {
		return this.products;
	}

	getTotal() {
		return this.products.reduce((sum, product) => sum + Number(product.price), 0);
	}

	getTotalWithDiscount(): number {
		return this._discountStrategy.getDiscount(this.getTotal());
	  }

}
