import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class UserregistrationService {
  constructor(private httpClient: HttpClient) {}

  saveUser() {
    // connect to DB and save user info
    // user = {
    //   userName: "santosh",
    //   email: "2mymail.santosh@gmail.com",
    //   age: 35,
    //   gender: "M"
    // };
  }

  updateUser() {
    // connect to DB and update user info
    // user = {
    //   userName: "santosh nanduri",
    //   email: "2mymail.santosh@gmail.com",
    //   age: 35,
    //   gender: "M"
    // };
  }

  deleteUser() {
    // deleete user from DB
  }

  getUserByName(userName) {
    // connect to Db and get user by his name : userName
    // user = {
    //   userName: "santosh",
    // };
  }
}
