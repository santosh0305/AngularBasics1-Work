import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { UserRegistrationComponent } from "./user-registration/user-registration.component";
import { UserregistrationService } from './user-registration/userregistration.service';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, UserRegistrationComponent],
  bootstrap: [AppComponent],
  providers: [UserregistrationService]
})
export class AppModule {}
