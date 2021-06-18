class Car {
  public id: number;

  public name: string;

  public price: number;

  public src: string;

  constructor(_id: number, _name: string, _price: number, _src: string) {
    this.id = _id;
    this.name = _name;
    this.price = _price;
    this.src = _src;
  }
}

export default Car;
