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

  constructor() {
    Info.currentUser = new User('0', 'test@gmail.com', 'pass', 'admin');
    this.header = new Header().render();
    this.container = '';
    this.page = new Main().render();
  }

  public render() {
    const headerBlock = document.createElement('div');

    headerBlock.append(this.header);
    document.body.append(headerBlock);
    const mainBlock = document.createElement('div');
    document.body.append(this.page);
  //  document.body.append(this.page);
  }
}

export default App;
