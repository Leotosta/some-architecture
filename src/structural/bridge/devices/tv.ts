export class Tv  {
	private _volume = 10;
	private _power = false;
	private _name = 'TV';
  
	get name(): string {
		return this._name;
	}
  
	set name(value: string) {
		this._name = value;
	}
  
	get power(): boolean {
		return this._power;
	}
  
	set power(powerStatus: boolean) {
		this._power = powerStatus;
	}
  
	get volume(): number {
		return this._volume;
	}
  
	set volume(volume: number) {
		if (volume < 0) return;
		if (volume > 100) return;
		this._volume = volume;
	}
}