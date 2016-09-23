export const juuiHomeState =
{
  name: 'home',
  url: '/',
  component: 'juuiHome'
};

export const juuiTopicsState =
{
  name: 'topic',
  url: '/{topic}',
  component: 'juuiTopic',
  resolve: {
    topic: /** @ngInject */
      ($stateParams,
       $state,
       $q,
       juuiAPI)=> {

      const topic = $stateParams.topic;
      return juuiAPI.getSubTopicMenu(topic)
        .then((result)=> {
          const topic = result.data.topic;
          if (topic) {
            return topic;
          } else {
            console.error('error');
            $state.go('home');
            return $q.reject({});
          }
        })
        .catch((error)=> {
          console.error(error);
          $state.go('home');
          return $q.reject(error);
        });

    }
  }
};

export const juuiTopicsFunctionsState =
{
  name: 'functions',
  url: '/{topic}/{subTopic}',
  component: 'juuiTopicFunctions',
  resolve: {
    subTopicDetails: /** @ngInject */
      ($stateParams,
       $state,
        $q,
       juuiAPI)=> {

      const topic = $stateParams.topic;
      const subTopic = $stateParams.subTopic;

      return juuiAPI.getSubTopicDetails(topic, subTopic)
        .then((result)=> {
          const subTopicDetails = {topic, subTopic};
          if (subTopicDetails) {
            return subTopicDetails;
          } else {
            console.error('error');
            $state.go('home');
            return $q.reject({});
          }
        })
        .catch((error)=> {
          console.error(error);
          $state.go('home');
          return $q.reject({});
        });

    }
  }
};

export const juuiTopicsGeometryState =
{
  name: 'functions',
  url: '/{topic}/{subTopic}',
  component: 'juuiTopicGeometry',
  resolve: {
    subTopicDetails: /** @ngInject */
      ($stateParams,
       $state,
       $q,
       juuiAPI)=> {

      const topic = $stateParams.topic;
      const subTopic = $stateParams.subTopic;

      return juuiAPI.getSubTopicDetails(topic, subTopic)
        .then((result)=> {
          const subTopicDetails = {topic, subTopic};
          if (subTopicDetails) {
            return subTopicDetails;
          } else {
            console.error('error');
            $state.go('home');
            return $q.reject({});
          }
        })
        .catch((error)=> {
          console.error(error);
          $state.go('home');
          return $q.reject({});
        });

    }
  }
};