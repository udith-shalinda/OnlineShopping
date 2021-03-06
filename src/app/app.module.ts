import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './nav/navbar/navbar.component';
import { FooterComponent } from './nav/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './products/product/product.component';
import { ProductService } from './products/product.service';
import { CategoryComponent } from './category/category.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {SlideshowModule} from 'ng-simple-slideshow';
import { ScrollEventModule } from 'ngx-scroll-event';
import { NgxPayPalModule } from 'ngx-paypal';


import {MatToolbarModule,MatButtonModule, MatCardModule, MatIconModule, MatPaginatorModule, MatProgressSpinnerModule, MatCheckboxModule} from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";
import { AuthService } from './auth/auth.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AddProductComponent } from './products/add-product/add-product.component';
import { AuthInterceptor } from './auth/auth-interceptor';
import { SingleProductComponent } from './products/single-product/single-product.component';
import { CartComponent } from './products/cart/cart.component';
import { CheckoutComponent } from './products/checkout/checkout.component';
import { EditInfoComponent } from './personalInfo/edit-info/edit-info.component';
import { ShowInfoComponent } from './personalInfo/show-info/show-info.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ProductComponent,
    CategoryComponent,
    SignupComponent,
    SigninComponent,
    AddProductComponent,
    SingleProductComponent,
    CartComponent,
    CheckoutComponent,
    EditInfoComponent,
    ShowInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SlideshowModule,
    ScrollEventModule,
    NgxPayPalModule,

    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    FlexLayoutModule,
    MatIconModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatCheckboxModule
  ],
  providers: [
    ProductService,
    AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
