import { IVehicle } from '../model/Ivehicle';

export class Car implements IVehicle {
    

	constructor(private name: string) {}

	pickup(custumerName: string): void {
		console.log(`${this.name}'ll pick ${custumerName} up `);
	}
	stop(): void {
		console.log(`${this.name}`);
        
	}

}