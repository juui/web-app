(function () {
  'use strict';
  angular
    .module('app').config(states);

  states.$inject = ['$stateProvider'];

  function states($stateProvider) {

    $stateProvider
      .state('login', {
        url: '/login',
        views: {
          '': {
            templateUrl: './../app/features/login/login-template.html',
            controller: 'LoginController as loginController'
          }
        }

      });
  }

})();
