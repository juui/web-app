export const juuiHomeStates =
  [
    {
      name: 'home',
      url: '/',
      component: 'juuiHome'
    }
  ];

export const juuiTopicsStates =
  [
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
    }
  ];

export const juuiTopicsFunctionsStates =
  [
    {
      name: 'functions',
      url: '/functions/{subTopic}',
      component: 'juuiTopicFunctions',
      resolve: {
        subTopicDetails: /** @ngInject */
          ($stateParams,
           $state,
           $q,
           juuiAPI)=> {

          const topic = 'functions';
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
    }
  ];

export const juuiTopicsGeometryStates =
  [
    {
      name: 'geometry',
      abstract: true,
      url: '/geometry',
      component: 'juuiTopicGeometry'
    },
    {
      name: 'geometry.regularPolygons',
      url: '/regularPolygons',
      component: 'juuiTopicGeometryRegularPolygons',
      resolve: {
        subTopicDetails: /** @ngInject */
          ($state,
           $q,
           juuiAPI)=> {

          const topic = 'geometry';
          const subTopic = 'regularPolygons';

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
    }
  ];
