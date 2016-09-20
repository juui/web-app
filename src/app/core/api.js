//const root = 'https://www.juui.org/api/';
const root = 'http://localhost:3008/api/';
const topics = {
  getSubTopics: root + 'topics/v1/list',
  getSubTopicDetails: root + 'topics/v1/details',
};

class juuiAPI {

  constructor($http) {

    /** @ngInject */
    this._$http = $http;

  }

  getSubTopicMenu(topic) {
    return this._$http.get(topics.getSubTopics, {
      params: {
        topic
      }
    });
  }

  getSubTopicDetails(topic,
                     subTopic) {
    return this._$http.get(topics.getSubTopicDetails, {
      params: {
        topic,
        subTopic
      }
    });
  }

}

export default juuiAPI;
