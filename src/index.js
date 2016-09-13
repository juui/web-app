import angular from 'angular';

import 'angular-material/angular-material.css';
import 'angular-aria';
import 'angular-animate';
import 'angular-messages';
import 'angular-material';
import 'angular-material-icons';

import 'angulartics';
import 'angulartics-google-analytics';

import 'angular-ui-router';
import routesConfig from './routes';
import runBlock from './runBlock';
export const app = 'app';

import './index.styl';
import './app/features/home/home.styles.styl'

import {dashboard} from './app/features/dashboard/dashboard.component';
import {toolbar} from './app/features/dashboard/toolbar.component';
import {sidenav} from './app/features/dashboard/sidenav.component'
import {content} from './app/features/dashboard/content.component';
import {footer} from './app/features/dashboard/footer.component';

import {home} from './app/features/home/home.component';

angular
  .module(app,
    [
      'ui.router',
      'ngMaterial',

      'ngMdIcons',

      'angulartics',
      'angulartics.google.analytics'

    ]
  )
  .config(routesConfig)
  .run(runBlock)
  .component('juuiDashboard', dashboard)
  .component('juuiToolbar', toolbar)
  .component('juuiSidenav', sidenav)
  .component('juuiContent', content)
  .component('juuiFooter', footer)
  .component('juuiHome', home);
