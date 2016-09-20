class TopicsComponent {

  /** @ngInject */
  constructor() {

  }

  $onInit() {
  }

  $onDestroy() {
  }

}

export const topics = {
  template: require('./topics.template.html'),
  controller: TopicsComponent,
  controllerAs: 'topicsController',
  selector: 'juuiTopics'
};
