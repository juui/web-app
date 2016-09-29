export default routesConfig;

import
{
  juuiHomeState,
  juuiTopicsState,
  juuiTopicsFunctionsState,
  juuiTopicsGeometryState
}
  from './app/states/index';

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  //$locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  const states = [
    juuiHomeState,
    juuiTopicsState,
    juuiTopicsFunctionsState,
    juuiTopicsGeometryState
  ];

  states.forEach(function (state) {
    $stateProvider.state(state);
  });

}
