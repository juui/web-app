export const juuiHomeState =
{
  name: 'home',
  url: '/',
  component: 'juuiHome'
};

export const juuiTopicsState =
{
  name: 'topics',
  url: '/{topic}',
  component: 'juuiTopics',
  resolve: {
    data: /** @ngInject */
      ($stateParams,
       $state,
       juuiAPI)=> {

      const topic = $stateParams.topic;
      return juuiAPI.getSubTopicMenu(topic)
        .then((result)=> {
          return result.data
        })
        .catch((error)=> {
          $state.go('home');
        });

    }
  }
};

export const juuiTopicsFunctionsState =
{
  name: 'topics.functions',
  url: '/{subTopic}',
  component: 'juuiTopicsFunctions',
  resolve: {
    data: /** @ngInject */
      ($stateParams,
       $state,
       juuiAPI)=> {

      const topic = $stateParams.topic;
      const subTopic = $stateParams.subTopic;

      return juuiAPI.getSubTopicDetails(topic, subTopic)
        .then((result)=> {
          return result.data
        })
        .catch((error)=> {
          $state.go('home');
        });

    }
  }
};