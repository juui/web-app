class GeometryController {

  /** @ngInject */
  constructor() {
    const subTopicDetails = this._subTopicDetails;
    this.topic = subTopicDetails.topic;
    this.subTopic = subTopicDetails.subTopic;

    this.sides = 3;
    this.MAX_SIDES = 10;
    this.MIN_SIDES = 3;
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
