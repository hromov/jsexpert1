import { Routes } from "@angular/router";
import { FilmCardComponent } from "./film-card/film-card.component"


export const routes: Routes = [
    { path: "", redirectTo: "films", pathMatch: "full"},
    { path: "films", component: FilmCardComponent },
    //временно направляем на тот-же компонент
    { path: "films/:id", component: FilmCardComponent}
];
