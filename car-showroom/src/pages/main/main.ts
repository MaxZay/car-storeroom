import Car from "../../data/entity/car";
import CarRepository from "../../data/repository/carRepository";
import { mainDraw } from '../draw';
import Info from "../info";
import Register from "../register/register";
import CarInfo from '../carInfo/info';

class Main {
  public container: HTMLElement;

  constructor() {
    this.container = document.createElement('main');
    const rep = new CarRepository('showroom', 'Car');
    const prom = rep.retrieve().then((res) => {
      for (let i = 0; i < res.length; i++) {
        Info.car.push(new Car(res[i].id, res[i].name, res[i].price, res[i].src));
      }

      this.container.innerHTML = mainDraw();
      this.bindDetailedButtons();
    });
  }

  bindDetailedButtons() : void {
    const buttons = this.container.querySelectorAll('.detailed');
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', (e) => {
        const a = buttons[i].parentElement?.id;
        if (a) {
          const main = document.querySelector('#main');
          main?.remove();
          document.body.append(new CarInfo(a).render());
          CarInfo.bindBackButton();
        }
      });
    }
  }

  public render() : HTMLElement {
    return this.container;
  }
}

export default Main;
