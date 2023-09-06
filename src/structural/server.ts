import { Radio } from './devices/radio';
import { Tv } from './devices/tv';
import { RemoteControl } from './remote-control/remote-control';
import { RemoteControlWithVolume } from './remote-control/remote-control-with-volum';


export function clientCode(
	abstraction: RemoteControl | RemoteControlWithVolume,
): void {
	abstraction.togglePower(); // true

	// Type Guard
	if (!('volumeUp' in abstraction)) return;

	abstraction.volumeUp(); // 20
	abstraction.volumeUp(); // 30
	abstraction.volumeDown(); // 20
}

const tv = new Tv();
const radio = new Radio();

const radioRemoteControl = new RemoteControlWithVolume(radio);
clientCode(radioRemoteControl);

const tvRemoteControl = new RemoteControlWithVolume(tv);
clientCode(tvRemoteControl);