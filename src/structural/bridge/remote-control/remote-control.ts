import { Radio } from '../devices/radio';
import { Tv } from '../devices/tv';

export class RemoteControl {
	constructor(protected device: Tv | Radio) {}
  
	togglePower(): void {
		this.device.power = !this.device.power;
		console.log(
			`${this.device.name} power status: ${this.device.power}`,
		);
	}
}
  