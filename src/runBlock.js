import * as vis from 'ui-router-visualizer';

export default runBlock;

/** @ngInject */
function runBlock($transitions, $analytics, $trace, juuiSocket) {

  $transitions.onSuccess(true,function($transition$) {
    $analytics.pageTrack($transition$.router.urlRouter.location);
  });

  //vis.visualizer(ng1UIRouter);

  $trace.enable(1);

  $transitions.onError(true, function(transition) {
    console.log('$transitions.onError');
    console.log(transition);
  });

}
