const root = 'https://www.juui.org';
//const root = 'http://localhost:3008';

const auth = {
  check: root + '/auth'
};

const topics = {
  getSubTopics: root + '/api/topics/v1/list',
  getSubTopicDetails: root + '/api/topics/v1/details',
};

class juuiAPI {

  /** @ngInject */
  constructor($http) {

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

  checkAuth() {
    return this._$http.post(auth.check);
  }

}

export default juuiAPI;
