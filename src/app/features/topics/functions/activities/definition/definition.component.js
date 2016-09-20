class FunctionsController {

  /** @ngInject */
  constructor() {
  }

  $onInit() {
    console.log('Init', 'FunctionsController');
    console.log(this);
  }

  $onDestroy() {
  }

}

export const topicsFunctions = {
  bindings: {
    step: '<'
  },
  template: require('./definition.template.html'),
  controller: FunctionsController,
  controllerAs: 'functionsController',
  selector: 'juuiTopicsFunctions'
};
