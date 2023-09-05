import { EnterpriseCarrier } from '../carrier/enterprise-carrier';
import { EnterpriseCostumer } from '../costumer/enterprise-costumer';
import { ICarrier } from '../model/carrier';
import { ICostumer } from '../model/costumer';
import { CustumerCarrierFactory } from '../model/custumer-carrier-factory';

export class EnterpriseCostumerCarrier implements CustumerCarrierFactory{

	createCostumer(costumerName: string): ICostumer {
		return new EnterpriseCostumer(costumerName);
	}
	createCarrier(vehicleName: string, costumerName: string): ICarrier {
		this.createCostumer(costumerName);
		return new EnterpriseCarrier(vehicleName, costumerName);
	}



}