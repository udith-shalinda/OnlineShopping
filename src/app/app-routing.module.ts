import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './products/product/product.component';
import { FooterComponent } from './nav/footer/footer.component';
import { CategoryComponent } from './category/category.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AddProductComponent } from './products/add-product/add-product.component';

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
  path:'**',
  redirectTo:'/Home'
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
