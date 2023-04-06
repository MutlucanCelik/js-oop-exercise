export default class Validator {
  static userValidityCheck(user) {
    let hasErrors = false;
    const fields = ["id", "name", "lastName", "city", "age"];
    for (const field in fields) {
      if (!user[fields[field]]) {
        hasErrors = true;
      }
    }
    return hasErrors;
  }
}
