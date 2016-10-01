class GeometryController {

  /** @ngInject */
  constructor($document, $timeout) {

  }

  $onInit() {
    console.log('Init', 'GeometryController');
    console.log(this);

  }

  $onDestroy() {
  }

}

export const topicGeometry = {
  bindings: {
    _subTopicDetails: '<subTopicDetails'
  },
  template: require('./geometry.template.html'),
  controller: GeometryController,
  controllerAs: 'geometryController',
  selector: 'juuiTopicGeometry'
};
