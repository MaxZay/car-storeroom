import { headerDraw } from '../draw';
import Main from '../main/main';
import Header from '../template/header/header';

class App {
  private container: string;

  private header: HTMLElement;

  private page: HTMLElement;

  constructor() {
    this.header = new Header().render();
    this.container = '';
    this.page = new Main().render();
  }

  public render() {
    const headerBlock = document.createElement('div');
    headerBlock.append(this.header);
    document.body.append(headerBlock);
    document.body.append(this.page);
  }
}

export default App;
