import Classification from './sections/classification/classification'

class RegularPolygonsController {

  /** @ngInject */
  constructor($timeout) {

    this._$timeout = $timeout;

    const subTopicDetails = this._subTopicDetails;
    this.topic = subTopicDetails.topic;
    this.subTopic = subTopicDetails.subTopic;

    this.sections = {
      classification: new Classification($timeout)
    };

  }

  $onInit() {
    console.log('$onInit', 'RegularPolygonsController');
  }

  $onDestroy() {
    console.log('$onDestroy', 'RegularPolygonsController');
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

