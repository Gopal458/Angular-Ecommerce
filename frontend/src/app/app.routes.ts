import { Routes } from '@angular/router';
import { Home } from './home/home';
import { ProductDetails } from './product-details/product-details';
import { CartComponent } from './cart/cart';

export const routes: Routes = [
    {
    path: "",
    component: Home,
    },
    {
        path:"product/:id",
        component:ProductDetails
    },
    {
        path:"cart",
        component:CartComponent
    }
];