import { CarFactory } from './factories/car.factory';

const carFactory = new CarFactory();
const newCar = carFactory.pickUp('Leonardo', 'Fusca');
newCar.stop();