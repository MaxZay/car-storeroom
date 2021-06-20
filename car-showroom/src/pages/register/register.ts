import Car from "../../data/entity/car";
import CarRepository from "../../data/repository/carRepository";
import { registerDraw } from '../draw';
import Info from "../info";

class Register {
  private container: HTMLElement;

  constructor() {
    this.container = document.createElement('main');
    this.container.innerHTML = registerDraw();
  }

  render() {
    return this.container;
  }
}

export default Register;
