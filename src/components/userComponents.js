import User from "../models/User.js";
import UserService from "../services/userService.js";

const user1 = new User(11, "Veli", "Kaya", "Ankara", 18);

console.log(UserService.getUser(1));

UserService.list();

console.log("--------------------------------------");

UserService.add(user1);

UserService.list();

console.log("--------------------------------------");

UserService.remove(5);

UserService.list();
