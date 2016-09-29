class RegularPolygonsController {

  /** @ngInject */
  constructor() {
    const subTopicDetails = this._subTopicDetails;
    this.topic = subTopicDetails.topic;
    this.subTopic = subTopicDetails.subTopic;
  }

}

export default RegularPolygonsController;
