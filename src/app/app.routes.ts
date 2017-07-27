import { Routes } from "@angular/router";

import { MapComponent } from "./components/map/map.component";
import { BasketComponent } from "./components/basket/basket.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";

export const routes: Routes = [
    { path: "", redirectTo: "/map", pathMatch: "full" },
    { path: "map", component: MapComponent },
    { path: "basket/:id", component: BasketComponent, data: { title: "Basket" } },
    { path: "basket", component: BasketComponent, data: { title: "Basket" } },
    { path: "**", component: PageNotFoundComponent }
];