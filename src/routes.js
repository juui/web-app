export default routesConfig;

import
{
  juuiHomeStates,
  juuiTopicsStates,
  juuiTopicsFunctionsStates,
  juuiTopicsGeometryStates,
  juuiPracticeStates
}
  from './app/states/index';

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  //$locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  const states = [
    ...juuiPracticeStates,
    ...juuiHomeStates,
    ...juuiTopicsStates,
    ...juuiTopicsFunctionsStates,
    ...juuiTopicsGeometryStates
  ];

  states.forEach(function (state) {
    $stateProvider.state(state);
  });

}
