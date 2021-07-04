import Car from "../../data/entity/car";
import App from "../app/app";
import { carInfoDraw } from "../draw";
import Info from "../info";

class CarInfo {
  private container: HTMLElement;

  private car: Car;

  constructor(str : string) {
    this.container = document.createElement('main');
    this.car = Info.car[parseInt(str, 10)];
    this.container.innerHTML = carInfoDraw(this.car);
  }

  static bindBackButton() {
    const button = document.querySelector('button');
    button?.addEventListener('click', () => {
      const main = document.querySelector('main');
      main?.remove();
      App.render();
    });
  }

  render() {
    return this.container;
  }
}

export default CarInfo;
