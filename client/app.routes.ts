import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { NotFoundComponent } from './components/notFound/notFound.component';
import { SecondComponent } from "./components/second/second.component";

export const routes: Routes = [
    { path: "", component: MainComponent },
    { path: "second", component: SecondComponent },
    { path: '**', component: NotFoundComponent }
];

export const routing = RouterModule.forRoot(routes, { useHash: false });
