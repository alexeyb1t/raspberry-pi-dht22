import { Gpio } from 'onoff';

const dht22 = new Gpio(7, 'out');

dht22.read((err, value) => {
  console.log(value);
})
