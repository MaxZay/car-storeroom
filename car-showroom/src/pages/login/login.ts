import Car from "../../data/entity/car";
import CarRepository from "../../data/repository/carRepository";
import { loginDraw } from '../draw';
import Info from "../info";

class LoginPage {
  private container: HTMLElement;

  constructor() {
    this.container = document.createElement('main');
    this.container.innerHTML = loginDraw();
  }

  render() {
    return this.container;
  }
}

export default LoginPage;
