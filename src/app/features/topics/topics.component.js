class TopicsController {

  /** @ngInject */
  constructor() {
    const subTopics = this._data.subTopics;
    this.title = subTopics.topic.label;
    this.topic = subTopics.topic.key;
    this.subTopics = subTopics.list;
  }

  $onInit() {
    console.log('Init', 'topicsController');
    console.log(this);
  }

  $onDestroy() {
  }

}

export const topics = {
  bindings: {
    _data: '<data'
  },
  template: require('./topics.template.html'),
  controller: TopicsController,
  controllerAs: 'topicsController',
  selector: 'juuiTopics'
};
