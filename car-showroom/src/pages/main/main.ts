import { mainDraw } from "../draw";

class Main {
  public container: HTMLElement;

  constructor() {
    this.container = document.createElement('main');
    this.container.innerHTML = mainDraw();
  }

  public render() : HTMLElement {
    return this.container;
  }
}

export default Main;
