import User from "../models/User.js";
import UserService from "../services/userService.js";

const user1 = new User(11, "Veli", "Kaya", "Ankara", 18);

console.log(UserService.getUser(1));

UserService.list();

UserService.add(user1);

UserService.list();

UserService.remove(5);

console.log("--------------------");

UserService.list();
