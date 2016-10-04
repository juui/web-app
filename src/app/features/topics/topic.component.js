class TopicController {

  /** @ngInject */
  constructor() {
    const topic = this._topic;

    this.title = topic.label;
    this.juuiId = topic.juuiId;
    this.subTopics = topic.subTopics;

    let mainContent = document.getElementById('main-content');
    if (mainContent){
      mainContent.scrollTop = 0;
    }

  }

  $onInit() {
  }

  getState(topic, subTopic) {
    return `${topic}.${subTopic}`;
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
