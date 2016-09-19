export default runBlock;

/** @ngInject */
function runBlock($transitions, $analytics, $http, $templateCache) {

  $transitions.onSuccess(true,function($transition$) {
    $analytics.pageTrack($transition$.router.urlRouter.location);
  });

}
