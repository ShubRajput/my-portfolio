import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
// import {bootstrap} from '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
