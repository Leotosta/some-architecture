import { IVehicle } from '../model/Ivehicle';

export abstract class VehicleFactory {
    abstract getVehicle(vehicleName: string): IVehicle  {}

    pickUp(customerName: string, vehicleName: string): IVehicle {
    	const vehicle = this.getVehicle(vehicleName);
    	vehicle.pickup(customerName);
    	return vehicle;
    }
}


/* 
Car(vehicleName) => VehiculeFactory(pickupMethod) => CarFactory('vehicleName')

*/