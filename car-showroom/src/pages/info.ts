import Car from "../data/entity/car";
import User from "../data/entity/user";

class Info {
  public static user: User[] = [];

  public static car: Car[] = [];

  public static currentUser: User;
}

export default Info;
