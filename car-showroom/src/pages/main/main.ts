import Car from "../../data/entity/car";
import CarRepository from "../../data/repository/carRepository";
import { mainDraw } from '../draw';
import Info from "../info";
import LoginPage from "../login/login";
import Register from "../register/register";

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
      document.body.append(this.container);
    });
  }

  public render() : HTMLElement {
    return this.container;
  }
}

export default Main;
