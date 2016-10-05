import Classification from './sections/classification/classification';
import Diagonal from './sections/diagonal/diagonal';
import TotalDiagonals from './sections/totalDiagonals/totalDiagonals';
import Angles from './sections/interiorExteriorAngles/interiorExteriorAngles'

class RegularPolygonsController {

  /** @ngInject */
  constructor($timeout, juuiConstants) {

    this._timerRender = undefined;
    this._tryRender();

    let mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.scrollTop = 0;
    }

    this._$timeout = $timeout;

    const subTopicDetails = this._subTopicDetails;
    this.topic = subTopicDetails.topic;
    this.subTopic = subTopicDetails.subTopic;

    this.sections = {
      classification: new Classification($timeout),
      diagonal: new Diagonal(juuiConstants.colors),
      totalDiagonals: new TotalDiagonals(),
      angles: new Angles()
    };

  }

  $onInit() {

  }

  $onDestroy() {
    this.sections.classification.cancelTimers();
  }

  _tryRender() {

    if (!this._render()) {
      this._timerRender = setInterval(
        ()=> {
          this._render();
        }, 500);
    }

  }

  _render() {

    if (MathJax) {
      MathJax.Hub.Queue(['Typeset', MathJax.Hub]);
      console.log('render');
      clearInterval(this._timerRender);
    }

    return MathJax;

  }


}

export const geometryRegularPolygons = {
  bindings: {
    _subTopicDetails: '<subTopicDetails'
  },
  template: require('./regularPolygons.template.html'),
  controller: RegularPolygonsController,
  controllerAs: 'regularPolygonsController',
  selector: 'juuiTopicGeometryRegularPolygons'
};

