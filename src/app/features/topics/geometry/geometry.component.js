class GeometryController {

  /** @ngInject */
  constructor() {
  }

  $onInit() {
  }

  $onDestroy() {
  }

}

export const topicGeometry = {
  template: require('./geometry.template.html'),
  controller: GeometryController,
  controllerAs: 'geometryController',
  selector: 'juuiTopicGeometry'
};
