import { provideRouter, RouterConfig } from '@angular/router';
import { AppComponent } from './components/app.component';

// export routes
export const routes: RouterConfig = [
    { path: '', component: null },
    { path: 'list', component: null }
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];

