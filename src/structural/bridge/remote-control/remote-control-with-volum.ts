import { Radio } from '../devices/radio';
import { Tv } from '../devices/tv';
import { RemoteControl } from './remote-control';

export class RemoteControlWithVolume extends RemoteControl {
	constructor(protected device: Tv | Radio) {
		super(device);
	}
  
	volumeUp(): void {
		const oldVolume = this.device.volume;
		this.device.volume += 10;
		console.log(
			`${this.device.name} tinha o volume ${oldVolume} agora tem ${this.device.volume}`,
		);
	}
  
	volumeDown(): void {
		const oldVolume = this.device.volume;
		this.device.volume -= 10;
		console.log(
			`${this.device.name} tinha o volume ${oldVolume} agora tem ${this.device.volume}`,
		);
	}
}