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
import settings from './settings'
import juuiAPI from './app/core/api'

export const app = 'app';

import './index.styl';
import './app/features/home/home.styles.styl'

import {dashboard} from './app/features/dashboard/dashboard.component';
import {toolbar} from './app/features/dashboard/toolbar.component';
import {sidenav} from './app/features/dashboard/sidenav.component'
import {content} from './app/features/dashboard/content.component';
import {footer} from './app/features/dashboard/footer.component';

import {home} from './app/features/home/home.component';

import {topic} from './app/features/topics/topic.component';
import {topicFunctions} from './app/features/topics/functions/activities/definition/definition.component';

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
  .config(settings)
  .run(runBlock)
  .service('juuiAPI', juuiAPI)
  .component('juuiDashboard', dashboard)
  .component('juuiToolbar', toolbar)
  .component('juuiSidenav', sidenav)
  .component('juuiContent', content)
  .component('juuiFooter', footer)
  .component('juuiHome', home)
  .component('juuiTopic', topic)
  .component('juuiTopicFunctions', topicFunctions);


