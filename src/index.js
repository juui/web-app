import angular from 'angular';

import 'angular-material/angular-material.css'
import 'angular-aria';
import 'angular-animate';
import 'angular-messages';
import 'angular-material';

import 'angular-ui-router';
import routesConfig from './routes';

import './index.styl';

export const app = 'app';

angular
  .module(app,
    [
      'ui.router',
      'ngMaterial'
    ]
  )
  .config(routesConfig);
