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
  component:AddProductComponent
},
{
  path:'cart',
  component:CartComponent
},{
  path:'checkout',
  component:CheckoutComponent
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
