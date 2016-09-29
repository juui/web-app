class FunctionsController {

  /** @ngInject */
  constructor() {
    const subTopicDetails = this._subTopicDetails;
    this.topic = subTopicDetails.topic;
    this.subTopic = subTopicDetails.subTopic;
  }

  $onInit() {
    console.log('Init', 'FunctionsController');
    console.log(this);
  }

  $onDestroy() {
  }

}

export const topicFunctions = {
  bindings: {
    _subTopicDetails: '<subTopicDetails'
  },
  template: require('./functions.template.html'),
  controller: FunctionsController,
  controllerAs: 'functionsController',
  selector: 'juuiTopicFunctions'
};
