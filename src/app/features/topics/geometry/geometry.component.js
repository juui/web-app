class GeometryController {

  /** @ngInject */
  constructor() {
  }

  $onInit() {
    console.log('Init', 'GeometryController');
    console.log(this);

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
