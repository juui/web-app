import angular from 'angular';

const paths = {
  '3': {
    d: 'M 75.00000000000003 206.60254037844388 L 74.99999999999996 33.397459621556166 L 225 119.99999999999997z',
    fill: '#ff249c'
  },
  '4': {
    d: 'M 125 220 L 25 120.00000000000001 L 124.99999999999999 20 L 225 119.99999999999997z',
    fill: '#7ada00'
  },
  '5': {
    d: 'M 155.90169943749476 215.10565162951536 L 44.09830056250526 178.77852522924732 L 44.09830056250526 61.2214747707527 L 155.90169943749473 24.894348370484636 L 225 119.99999999999997z',
    fill: '#47bbea'
  },
  '6': {
    d: 'M 175 206.60254037844385 L 75.00000000000003 206.60254037844388 L 25 120.00000000000001 L 74.99999999999996 33.397459621556166 L 174.99999999999994 33.397459621556095 L 225 119.99999999999997z',
    fill: '#ff7312'
  },
  '7': {
    d: 'M 187.34898018587336 198.183148246803 L 102.74790660436857 217.49279121818236 L 34.90311320975809 163.38837391175582 L 34.90311320975809 76.61162608824421 L 102.74790660436854 22.50720878181764 L 187.34898018587333 41.816851753197014 L 225 119.99999999999997z',
    fill: '#ff249c'
  },
  '8': {
    d: 'M 195.71067811865476 190.71067811865476 L 125 220 L 54.28932188134526 190.71067811865476 L 25 120.00000000000001 L 54.28932188134523 49.28932188134526 L 124.99999999999999 20 L 195.71067811865476 49.28932188134523 L 225 119.99999999999997z',
    fill: '#7ada00'
  },
  '9': {
    d: 'M 201.6044443118978 184.27876096865393 L 142.36481776669305 218.4807753012208 L 75.00000000000003 206.60254037844388 L 31.03073792140917 154.20201433256688 L 31.030737921409155 85.79798566743312 L 74.99999999999996 33.397459621556166 L 142.364817766693 21.519224698779183 L 201.6044443118978 55.721239031346045 L 225 119.99999999999997z',
    fill: '#47bbea'
  },
  '10': {
    d: 'M 205.90169943749476 178.77852522924732 L 155.90169943749476 215.10565162951536 L 94.09830056250527 215.10565162951536 L 44.09830056250526 178.77852522924732 L 25 120.00000000000001 L 44.09830056250526 61.2214747707527 L 94.09830056250524 24.89434837048465 L 155.90169943749473 24.894348370484636 L 205.90169943749473 61.221474770752664 L 225 119.99999999999997z',
    fill: '#ff7312'
  }
};

class GeometryController {

  /** @ngInject */
  constructor($document) {
    const subTopicDetails = this._subTopicDetails;
    this.topic = subTopicDetails.topic;
    this.subTopic = subTopicDetails.subTopic;

    this.sides = 3;
    this.MAX_SIDES = 10;
    this.MIN_SIDES = 3;

    let snap = Snap('#svg');

    var w = angular.element($document[0].getElementById('svg'));
    w.bind('resize', function () {
      console.log('resize');
    });
    console.log(w);

    const options = paths[this.sides];
    this._polygon = snap.path(options.d);
    this._polygon.attr({
      fill: options.fill,
      stroke: '#000',
      //preserveAspectRatio: 'xMinYMin meet',
      strokeWidth: 1,
      transform: 'r270'
    });

  }

  $onInit() {
    console.log('Init', 'GeometryController');
    console.log(this);
  }

  $onDestroy() {
  }

  animatePolygon(sides) {
    const options = paths[sides];
    this._polygon.animate({
      d: options.d,
      fill: options.fill
    }, 1000, ()=> {
      console.log('finish');
    });
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
