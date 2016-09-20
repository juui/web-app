import * as vis from 'ui-router-visualizer';

export default runBlock;

/** @ngInject */
function runBlock($transitions, $analytics, ng1UIRouter, $trace) {

  $transitions.onSuccess(true,function($transition$) {
    $analytics.pageTrack($transition$.router.urlRouter.location);
  });

  //vis.visualizer(ng1UIRouter);

  $trace.enable(1);

}
