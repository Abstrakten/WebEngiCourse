import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { NotFoundComponent } from './components/notFound/notFound.component';

export const routes: Routes = [
    { path: "", component: MainComponent },
    //put all other i between
    { path: '*', component: NotFoundComponent },
];

export const routing = RouterModule.forRoot(routes, { useHash: false });
