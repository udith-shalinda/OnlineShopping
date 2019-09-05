import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './products/product/product.component';
import { FooterComponent } from './nav/footer/footer.component';
import { CategoryComponent } from './category/category.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AddProductComponent } from './products/add-product/add-product.component';
import { SingleProductComponent } from './products/single-product/single-product.component';
import { CartComponent } from './products/cart/cart.component';
import { CheckoutComponent } from './products/checkout/checkout.component';
import { AuthGuard } from './auth/auth-guard';
import { EditInfoComponent } from './personalInfo/edit-info/edit-info.component';
import { ShowInfoComponent } from './personalInfo/show-info/show-info.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'Home',
    pathMatch:'full'
  },
  {
  path:'Home',
  component:HomeComponent,
  children:[
    {
      path:'',
      component:ProductComponent
    },
    {
      path:':id',
      component:ProductComponent
    }
  ]
},
{
  path:'home/:id',
  component:SingleProductComponent
},
{
  path:'Category',
  component:CategoryComponent,
  children:[
    {
      path:'',
      component:ProductComponent
    },
    {
      path:':id',
      component:ProductComponent
    }
  ]
},
{
  path:'signin',
  component:SigninComponent
},
{
  path:'signup',
  component:SignupComponent
},{
  path:'addItem',
  component:AddProductComponent,
  // canActivate:[AuthGuard]
},
{
  path:'cart',
  component:CartComponent,
  // canActivate:[AuthGuard]
},{
  path:'checkout',
  component:CheckoutComponent,
  // canActivate:[AuthGuard]
},{
  path:'editPersonalInfo',
  component:EditInfoComponent
},
{
  path:'showPersonalInfo',
  component:ShowInfoComponent
},
{
  path:'**',
  redirectTo:'/Home'
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
