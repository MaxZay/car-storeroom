import './styles.scss';
import UserRepository from './data/repository/userRepository';
import User from './data/entity/user';
import App from './pages/app/app';
import Car from './data/entity/car';
import CarRepository from './data/repository/carRepository';
import Info from './pages/info';

const users = [
  new User('0', 'maximzay2017@gmail.com', '0506', 'admin'),
];

const cars = [
  new Car(0, 'Audi A4', 33000, 'https://www.domkrat.by/upload/iblock/e26/e_tron.jpg'),
  new Car(1, 'Audi A5 Sportback', 41000, 'https://www.domkrat.by/upload/iblock/3f5/audi_a5_sportback_2020.jpg'),
  new Car(2, 'Audi A5 Coupe', 43000, 'https://www.domkrat.by/upload/iblock/d2f/audi_a5_coupe_2020.jpg'),
  new Car(3, 'Audi A6', 44000, 'https://www.domkrat.by/upload/iblock/f56/audi_a6_2020_2.jpg'),
  new Car(4, 'Audi A7 Sportback', 65000, 'https://www.domkrat.by/upload/iblock/693/audi_a7_sportback_2020.jpg'),
  new Car(5, 'Audi Q3', 35000, 'https://www.domkrat.by/upload/iblock/469/audi_q3_2020.jpg'),
  new Car(6, 'Audi Q5', 57000, 'https://www.domkrat.by/upload/iblock/5f9/audi_q5_2021.jpg'),
  new Car(7, 'Audi Q7', 71000, 'https://www.domkrat.by/upload/iblock/122/audi_q7_2020.jpg'),
  new Car(8, 'Audi Q8', 81000, 'https://www.domkrat.by/upload/iblock/91c/audi_q8_2020.jpg'),
];

const carTest = new CarRepository('showroom', 'Car');
cars.forEach((carItem) => {
  carTest.add(carItem);
});

const test = new UserRepository('showroomUser', 'User');
test.add(users[0]);

const app = new App();
app.render();

// const test = new UserRepository('showroom', 'User');
// test.add(users[0]);
// test.add(users[1]);
// test.remove('1');
// const a = test.retrieve();
// console.log(a);

// console.log('Hello world');
