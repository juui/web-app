export default routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  const states = [
    {
      name: 'home',
      url: '/',
      component: 'juuiHome'
    },
    {
      name: 'topics',
      url: '/topics',
      component: 'juuiTopics'
    },
    {
      name: 'topics.functions',
      url: '/{step}',
      component: 'juuiTopicsFunctions',
      resolve: {
        step: /** @ngInject */
          ($stateParams)=> {
          return $stateParams.step;
        }
      }
    }
  ];

  states.forEach(function(state) {
    $stateProvider.state(state);
  });

}
