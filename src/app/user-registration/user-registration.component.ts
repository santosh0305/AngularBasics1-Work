import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-user-registration",
  templateUrl: "./user-registration.component.html",
  styleUrls: ["./user-registration.component.css"]
})
export class UserRegistrationComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  // userName = "please enter user name";
  // emailPlaceholder = "please enter email";

  // user = {
  //   userName: "santosh",
  //   email: "2mymail.santosh@gmail.com",
  //   age: 35,
  //   gender: "M"
  // };

  saveUser(evt: any) {
    // handel click even here
    console.log("hi");
  }

  txtUserNameChange() {
    console.log("text box change triggered");
  }
}
