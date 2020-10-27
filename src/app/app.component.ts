import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  // declare variables
  age: number = 40; // int
  greeting: string = "Welcome to Angular !!"; // string
  gender: string = "M"; // char
  isIndian: boolean = false; // boolean
  isAmerican: boolean = false;
  ages = [12, 50, 30, 37]; // array
  priceLessThan = 35000.45; //float
  priceGreaterThan = 35000.56; //float
  birthday = new Date(1988, 3, 15);
  // JSON
  user = {
    name: "santosh",
    age: "37",
    address: "PLOT NO:27",
    contry: "India"
  };
  imgUrl: string =
    "https://image.freepik.com/free-vector/empty-map-with-multicolored-pin-pointers_1284-42600.jpg";

  // write methods
  GetallProducts() {}

  GetProductById() {
    return "Apple Watch";
  }

  GetProductByBrand() {
    return "Apple";
  }

  getAge() {
    // DB hit get me age
    return 123;
  }

  loadImage() {
    return this.imgUrl;
  }
}
