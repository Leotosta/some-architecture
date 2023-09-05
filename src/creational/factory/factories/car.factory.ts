import { IVehicle } from '../model/Ivehicle';
import { Car } from '../vehicule/car';
import { VehicleFactory } from './vehicle-factory';

export class CarFactory extends VehicleFactory {


	getVehicle(vehicleName: string): IVehicle {
		return new Car(vehicleName); 
	}

}