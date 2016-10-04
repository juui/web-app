import Classification from './sections/classification/classification';
import Diagonal from './sections/diagonal/diagonal';
import TotalDiagonals from './sections/totalDiagonals/totalDiagonals';

class RegularPolygonsController {

  /** @ngInject */
  constructor($timeout, juuiConstants) {

    let mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.scrollTop = 0;
    }

    this._$timeout = $timeout;

    const subTopicDetails = this._subTopicDetails;
    this.topic = subTopicDetails.topic;
    this.subTopic = subTopicDetails.subTopic;

    this.sections = {
      classification: new Classification($timeout),
      diagonal: new Diagonal(juuiConstants.colors),
      totalDiagonals: new TotalDiagonals()
    };

  }

  $onInit() {

  }

  $onDestroy() {
    this.sections.classification.cancelTimers();
  }


}

export const geometryRegularPolygons = {
  bindings: {
    _subTopicDetails: '<subTopicDetails'
  },
  template: require('./regularPolygons.template.html'),
  controller: RegularPolygonsController,
  controllerAs: 'regularPolygonsController',
  selector: 'juuiTopicGeometryRegularPolygons'
};

