import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './products/product/product.component';
import { FooterComponent } from './nav/footer/footer.component';
import { CategoryComponent } from './category/category.component';

const routes: Routes = [
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
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
