import Car from "../../data/entity/car";
import CarRepository from "../../data/repository/carRepository";
import { registerDraw } from '../draw';
import Info from "../info";
import User from "../../data/entity/user";
import UserRepository from "../../data/repository/userRepository";

class Register {
  private container: HTMLElement;

  constructor() {
    this.container = document.createElement('div');
    this.container.innerHTML = registerDraw();
  }

  static bindButtons() : void {
    const user = new User((Math.floor(Math.random() * 100000000)).toString(),
    (document.getElementById('login') as HTMLInputElement)?.value,
    (document.getElementById('email') as HTMLInputElement)?.value,
    (document.getElementById('pass') as HTMLInputElement)?.value);
    const test = new UserRepository('showroomUser', 'User');
    test.add(user);
  }

  render() : HTMLElement {
    return this.container;
  }
}

export default Register;
