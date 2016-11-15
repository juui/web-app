import  'velocity-animate/velocity';
import 'velocity-animate/velocity.ui';
//Velocity(document.body, { opacity: 0.5 });

class Concepts {

  constructor() {

    this._allConcepts = [];

    this._concepts = {
      'center': {
        label: 'Centro',
        components: ['internalCircle', 'externalCircle', 'center', 'centerText'],
        elements: []
      },
      'radius': {
        label: 'Radio',
        components: ['radius', 'center', 'centerText', 'radiusText'],
        elements: []
      },
      'apothem': {
        label: 'Apotema',
        components: ['apothem', 'apothemText', 'slice', 'angle90', 'center', 'centerText'],
        elements: []
      }
    };

    this._canvas = Snap('#svg-concepts-1');

    Snap.load(require('./assets/example-1.svg'),
      (svg)=> {

        this._canvas.attr({viewBox: '0 0 1280 720.00001'});
        this._canvas.append(svg);

        for (let keyConcept in this._concepts) {
          let concept = this._concepts[keyConcept];
          let components = this._concepts[keyConcept].components;
          for (let component of components) {
            let element = document.getElementById(component);
            console.log(element);
            if (element){
              concept.elements.push(element);
              Velocity(element, {opacity: 0});
            }
          }
        }

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

