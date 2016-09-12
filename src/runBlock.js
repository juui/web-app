export default runBlock;

/** @ngInject */
function runBlock($window, $templateCache, $http, $location, $rootScope) {

  $rootScope
    .$on('$stateChangeSuccess',
      function (event) {
        if (!$window.ga) {
          return;
        }
        $window.ga('send', 'pageview', {page: $location.path()});
      });

}
