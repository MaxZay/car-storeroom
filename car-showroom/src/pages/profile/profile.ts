import { profileDraw } from "../draw";

class ProfilePage {
  private container: HTMLElement;

  constructor() {
    this.container = document.createElement('main');
    this.container.innerHTML = profileDraw();
  }

  render() {
    return this.container;
  }
}

export default ProfilePage;
