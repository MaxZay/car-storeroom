import Info from "./info";

export function profileDraw() {
  return `<div class="profile-wrapper">
            <div class="profile-block">
              <h3>Логин:</h3>
              <h3>Max</h3>
            </div>
            <div class="profile-block">
              <h3>Почта:</h3>
              <h3>${Info.currentUser.email}</h3>
            </div>
            <div class="profile-block">
              <h3>Пароль:</h3>
              <h3>${Info.currentUser.password}</h3>
            </div>
          </div>`;
}

export function loginDraw() {
  return `<form class="form">
  <h2 class="register_title">Авторизация</h2>
  <div class="register_info">
    <div class="register_block">
      <input placeholder="Логин" class="register_input" id="login_input">
    </div>
    <div class="register_block">
      <input placeholder="Пароль" class="register_input" id="pass">
    </div>
  </div>
  <div class="register_buttons">
    <button class="register_register">Войти</button>
    <button class="register_cancel">Отмена</button>
  </div>
</form>`;
}

export function registerDraw() {
  return `<form class="form">
    <h2 class="register_title">Регистрация</h2>
    <div class="register_info">
      <div class="register_block">
        <input placeholder="Логин" class="register_input" id="login">
      </div>
      <div class="register_block">
        <input placeholder="Почта" class="register_input" id="email">
      </div>
      <div class="register_block">
        <input placeholder="Пароль" class="register_input" id="pass">
      </div>
    </div>
    <div class="register_buttons">
      <button class="register_register">Регистрация</button>
      <button class="register_cancel">Отмена</button>
    </div>
  </form>`;
}

//#region Header
function headerUserDraw() {
  return `<h3>${Info.currentUser.email}</h3>
          <button>Выход</button>`;
}

export function headerDraw() {
  if (Info.currentUser) {
    return headerUserDraw();
  }
  return `<button id="register">Регистация</button>
    <button id="login">Логин</button>`;
}

//#endregion
function drawAdminCar(car) {
  return `<div class="car">
  <img src="${car.src}" width="200" height="150">
  <h3>${car.name}</h3>
  <h3>${car.price}$</h3>
  <div class="button-wrapper">
    <button>Подробнее</button>
    <button>Купить</button>
    <button>Изменить</button>
  </div>
</div>`;
}

function drawUserCar(car) {
  return `<div class="car">
            <img src="${car.src}" width="200" height="150">
            <h3>${car.name}</h3>
            <h3>${car.price}$</h3>
            <div class="button-wrapper">
              <button>Подробнее</button>
              <button>Купить</button>
            </div>
          </div>`;
}

function drawCar(car) {
  return `<div class="car">
            <img src="${car.src}" width="200" height="150">
            <h3>${car.name}</h3>
            <h3>${car.price}$</h3>
            <button>Подробнее</button>
          </div>`;
}

function drawCars() {
  let container = '';
  for (let i = 0; i < Info.car.length; i++) {
    if (Info.currentUser) {
      if (Info.currentUser.role === 'user') {
        container += drawUserCar(Info.car[i]);
      } else if (Info.currentUser.role === 'admin') {
        container += drawAdminCar(Info.car[i]);
      }
    } else {
      container += drawCar(Info.car[i]);
    }
  }
  return container;
}

export function mainDraw() {
  return `<div class="car-warpper">
            ${drawCars()}
          </div>`;
}
