import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ButtonComponent} from "./components/button/button.component";
import {LinkFormComponent} from "./components/link-form/link-form.component";
import {MainLayoutComponent} from "./components/main-layout/main-layout.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {ModalComponent} from './components/modal/modal.component';
import {LoginComponent} from './components/login/login.component';
import {BackgroundDirective} from "./directives/background-color.directive";
import { UppercasePipe} from "./pipes/uppercase.pipe";
import {NavbarComponent} from "./components/navbar/navbar.component";
import {SearchInputComponent} from "./components/search-input/search-input.component";
import {PaginationComponent} from "./components/pagination/pagination.component";
import {UpdateFormComponent} from "./components/update-form/update-form.component";
import { RegisterComponent } from './components/register/register.component';
import { RecentVisitedComponent } from './components/recent-visited/recent-visited.component';
import { EmailFormatDirective } from './directives/email-format.directive';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundDirective,
    UppercasePipe,
    ButtonComponent,
    LinkFormComponent,
    MainLayoutComponent,
    NavbarComponent,
    SearchInputComponent,
    PaginationComponent,
    ModalComponent,
    LoginComponent,
    UpdateFormComponent,
    RegisterComponent,
    RecentVisitedComponent,
    EmailFormatDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
