import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about.component';

const ROUTES: Routes = [
    { path: '', component: AboutComponent }
];

export const APP_ROUTING = RouterModule.forChild(ROUTES);
