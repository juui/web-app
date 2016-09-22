class TopicController {

  /** @ngInject */
  constructor() {
    const topic = this._topic;

    this.title = topic.label;
    this.juuiId = topic.juuiId;
    this.subTopics = topic.subTopics;
  }

  $onInit() {
    console.log('Init', 'topicController');
    console.log(this);
  }

  $onDestroy() {
  }

}

export const topic = {
  bindings: {
    _topic: '<topic'
  },
  template: require('./topic.template.html'),
  controller: TopicController,
  controllerAs: 'topicController',
  selector: 'juuiTopic'
};
