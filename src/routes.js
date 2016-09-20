export default routesConfig;

import
{
  juuiHomeState,
  juuiTopicsState,
  juuiTopicsFunctionsState
}
  from './app/states/index';

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  const states = [
    juuiHomeState,
    juuiTopicsState,
    juuiTopicsFunctionsState
  ];

  states.forEach(function (state) {
    $stateProvider.state(state);
  });

}
