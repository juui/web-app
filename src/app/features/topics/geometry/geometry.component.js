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
  template: `<ui-view></ui-view>`,
  controller: GeometryController,
  controllerAs: 'geometryController',
  selector: 'juuiTopicGeometry'
};
