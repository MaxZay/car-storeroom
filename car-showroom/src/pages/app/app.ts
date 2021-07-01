import User from '../../data/entity/user';
import { headerDraw } from '../draw';
import Info from '../info';
import LoginPage from '../login/login';
import Main from '../main/main';
import ProfilePage from '../profile/profile';
import Register from '../register/register';
import Header from '../template/header/header';

class App {
  private container: string;

  private header: HTMLElement;

  private page: HTMLElement;

  public static registerPage: HTMLElement | null;

  public static loginPage: HTMLElement | null;

  constructor() {
    this.header = new Header().render();
    this.container = '';
    this.page = new Main().render();
  }

  bindHeader() : void {
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
        document.body.append(reg);
        LoginPage.bindButtons();
        // document.body.remove();
        // const headerBlock = document.createElement('div');
        // headerBlock.append(this.header);
        // document.body.append(headerBlock);
        // document.body.append(this.page);
      });
    }
  }

  public render() : void {
    const headerBlock = document.createElement('div');
    headerBlock.append(this.header);
    document.body.append(headerBlock);
    document.body.append(this.page);
    this.bindHeader();
  }
}

export default App;
