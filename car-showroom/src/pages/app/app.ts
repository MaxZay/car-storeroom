import User from '../../data/entity/user';
import { headerDraw, mainDraw } from '../draw';
import Info from '../info';
import LoginPage from '../login/login';
import Main from '../main/main';
import ProfilePage from '../profile/profile';
import Register from '../register/register';
import Header from '../template/header/header';

class App {
  private static header: HTMLElement;

  private static page: HTMLElement;

  public static registerPage: HTMLElement | null;

  public static loginPage: HTMLElement | null;

  // constructor() {
  //   App.header = new Header().render();
  //   App.page = new Main().render();
  // }

  static bindHeader() : void {
    const register = document.getElementById('register');
    const login = document.getElementById('login');
    if (register) {
      register.addEventListener('click', () => {
        App.registerPage = new Register().render();
        const reg = document.createElement('div');
        reg.append(App.registerPage);
        document.body.append(reg);
        Register.bindButtons();
      });
    }

    if (login) {
      login.addEventListener('click', () => {
        App.loginPage = new LoginPage().render();
        const reg = document.createElement('div');
        reg.append(App.loginPage);
        const main = document.querySelector('#main');
        main?.append(reg);
        LoginPage.bindButtons();
        // document.body.remove();
        // const headerBlock = document.createElement('div');
        // headerBlock.append(this.header);
        // document.body.append(headerBlock);
        // document.body.append(this.page);
      });
    }
  }

  public static render() : void {
    Info.car = [];
    const main = document.createElement('div');
    main.id = 'main';
    const headerBlock = document.createElement('div');
    this.page = new Main().render();
    this.header = new Header().render();
    headerBlock.append(this.header);
    main.append(headerBlock);
    main.append(this.page);
    document.body.append(main);
    App.bindHeader();
  }
}

export default App;
