import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-user-registration",
  templateUrl: "./user-registration.component.html",
  styleUrls: ["./user-registration.component.css"]
})
export class UserRegistrationComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  userName = "please enter user name";
  // user = {
  //   userName: "santosh",
  //   email: "2mymail.santosh@gmail.com",
  //   age: 35,
  //   gender: "M"
  // };
}
