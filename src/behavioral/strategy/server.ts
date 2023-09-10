import { EcommerceProduct } from './ecommerce/ecommerce-product';
import { NewDiscount } from './ecommerce/new-discount';

const ecommerce = new EcommerceProduct();
ecommerce.discount = new NewDiscount();

ecommerce.addProducts({name: 'car', price: '112.3'});
ecommerce.addProducts({name: 'xampu', price: '10.3'});
ecommerce.addProducts({name: 'beer', price: '2.3'});

console.log(
	ecommerce.getTotal(),
	ecommerce.getTotalWithDiscount()
);

