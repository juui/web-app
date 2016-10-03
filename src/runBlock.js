import * as vis from 'ui-router-visualizer';

export default runBlock;

/** @ngInject */
function runBlock($uiRouter, $transitions, $analytics, $trace, juuiSocket) {

  $transitions.onSuccess(true,function($transition$) {
    $analytics.pageTrack($transition$.router.urlRouter.location);
  });

  //vis.visualizer($uiRouter);

  $trace.enable(1);

  $transitions.onError(true, function(transition) {
    console.log('$transitions.onError');
    console.log(transition);
  });

}
