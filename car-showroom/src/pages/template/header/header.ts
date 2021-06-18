import { headerDraw } from "../../draw";

class Header {
  public container: HTMLElement;

  constructor() {
    this.container = document.createElement('header');
    this.container.innerHTML = headerDraw();
  }

  public render() : HTMLElement {
    return this.container;
  }
}

export default Header;
