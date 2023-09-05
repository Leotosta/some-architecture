import { ICarrier } from './carrier';
import { ICostumer } from './costumer';

export interface CustumerCarrierFactory {
    createCostumer(costumerName: string): ICostumer;
    createCarrier(vehicleName: string, costumerName: string): ICarrier;
}