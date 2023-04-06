import { users } from "../data/users.js";
import Validator from "../crossUseStructures/validators/userValidator.js";

export default class userService {
  constructor(loggerService) {
    this.loggerService = loggerService;
  }

  //Belirtilmiş olan id'ye sahip user getirildi
  getUser(id) {
    return users.find((user) => user.id === id);
  }

  //Tüm data ekrana basıldı
  list() {
    users.forEach((user) => console.log(user));
  }

  //Uygulamış olduğumuz basit koşula uyan user, dataları tuttuğumuz diziye eklendi
  add(user) {
    try {
      if (!Validator.userValidityCheck(user)) {
        console.log("başarılı kayıt");
        users.push(user);
      } else {
        throw new Error("Kayıt oluşturulamadı");
      }
    } catch (e) {
      console.error(e.message);
    }
  }

  //Belirtilen id'ye sahip kullanıcı dataları tuttuğumuz diziden silindi
  remove(id) {
    const user = users.find((user) => user.id === id);
    users.splice(users.indexOf(user), 1);
  }
}
