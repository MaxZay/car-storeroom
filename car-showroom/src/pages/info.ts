import Car from "../data/entity/car";
import User from "../data/entity/user";

class Info {
  public static users: User[] = [];

  public static car: Car[] = [];

  public static currentUser: User;
}

export default Info;
