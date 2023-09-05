import { IndividualCarrier } from '../carrier/individual-carrier';
import { IndividualCostumer } from '../costumer/individual-costumer';
import { ICarrier } from '../model/carrier';
import { ICostumer } from '../model/costumer';
import { CustumerCarrierFactory } from '../model/custumer-carrier-factory';

export class IndividualCustumerCarrier implements CustumerCarrierFactory{
	createCostumer(costumerName: string): ICostumer {
		return new IndividualCostumer(costumerName );
	}
    
	createCarrier(vehicleName: string, custumer: string): ICarrier {
		this.createCostumer(custumer);
		return new IndividualCarrier(vehicleName, custumer);
	}

} 