import Velocity from 'velocity-animate';

class Concepts {

  constructor() {

    this._concepts = {
      'center': {
        label: 'Centro',
        components: ['internalCircle', 'externalCircle', 'center', 'centerText']
      },
      'radius': {
        label: 'Radio',
        components: ['radius']
      },
      'apothem': {
        label: 'Apotema',
        components: ['apothem', 'apothemText', 'slice', 'angle90']
      }
    };

    this._canvas = Snap('#svg-concepts-1');

    Snap.load(require('./assets/example-1.svg'),
      (svg)=> {

        this._canvas.attr({viewBox: '0 0 1280 720.00001'});
        this._canvas.append(svg);

      });

  }

  _hideConcepts() {

  }

  automaticConcepts() {


    this._hideConcepts();

  }

  _animate() {

  }

}

export default Concepts;

