import User from "../models/User.js";
import userService from "../services/userService.js";

const user1 = new User(11, "Veli", "Kaya", "Ankara", 18);
let uService = new userService();

console.log(uService.getUser(1));

uService.list();

uService.add(user1);

uService.list();

uService.remove(5);

console.log("--------------------");

uService.list();
