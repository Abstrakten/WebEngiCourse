import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { NotFoundComponent } from './components/notFound/notFound.component';
import { SecoundComponent } from "./components/secound/secound.component";

export const routes: Routes = [
    { path: "", component: MainComponent },
    { path: "secound", component: SecoundComponent },
    { path: '**', component: NotFoundComponent }
];

export const routing = RouterModule.forRoot(routes, { useHash: false });
