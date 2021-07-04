import Car from "../../data/entity/car";
import User from "../../data/entity/user";
import CarRepository from "../../data/repository/carRepository";
import UserRepository from "../../data/repository/userRepository";
import App from "../app/app";
import { headerDraw, loginDraw } from '../draw';
import Info from "../info";

class LoginPage {
  private container: HTMLElement;

  constructor() {
    this.container = document.createElement('main');
    this.container.innerHTML = loginDraw();
  }

  static bindButtons() : void {
    const form = document.querySelector('form');
    form?.addEventListener('submit', (e) => {
      e.preventDefault();
    });
    const register = document.querySelector('.register_register');
    register?.addEventListener('click', () => {
      // const user = new User((Math.floor(Math.random() * 100000000)).toString(),
      //   (document.getElementById('login') as HTMLInputElement)?.value,
      //   (document.getElementById('email') as HTMLInputElement)?.value,
      //   (document.getElementById('pass') as HTMLInputElement)?.value);
      const userRepository = new UserRepository('showroomUser', 'User');
      userRepository.retrieve().then((res) => {
        for (let i = 0; i < res.length; i++) {
          Info.users.push(new User(res[i].id, res[i].email, res[i].password, res[i].login, res[i].role));
        }
        const login = document.getElementById('login_input') as HTMLInputElement;
        const pass = document.getElementById('pass') as HTMLInputElement;
        const test = Info.users.filter((u) => u.login === login.value && u.password === pass.value);
        if (test[0]) {
          // eslint-disable-next-line prefer-destructuring
          Info.currentUser = test[0];
          const main = document.querySelector('#main');
          if (main) {
            main.remove();
            App.render();
          }
        }
      });
    });
    const cancel = document.querySelector('.register_cancel');
    cancel?.addEventListener('click', () => {
      const formTest = document.querySelector('.form');
      formTest?.remove();
    });
  }

  render() : HTMLElement {
    return this.container;
  }
}

export default LoginPage;
