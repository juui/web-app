import  'velocity-animate/velocity';
import 'velocity-animate/velocity.ui';

class Concepts {

  constructor({$scope}) {

    this._$scope = $scope;
    this.isEnableAnimation = true;

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
            if (element) {
              concept.elements.push(element);
            }
          }
          Velocity(concept.elements, {opacity: 0});
        }
      });

  }


  automaticConcepts() {

    Velocity(this._concepts['center']['elements'], 'stop');
    Velocity(this._concepts['radius']['elements'], 'stop');
    Velocity(this._concepts['apothem']['elements'], 'stop');

    this.currentConcept = this._concepts['center']['label'];
    this.isEnableAnimation = false;
    Velocity(this._concepts['center']['elements'], {opacity: 1}, 7000);
    Velocity(this._concepts['center']['elements'], {opacity: 0})
      .then(()=> {
        this.currentConcept = this._concepts['radius']['label'];
        this._$scope.$apply();
      });

    Velocity(this._concepts['radius']['elements'], {opacity: 1}, 7000);
    Velocity(this._concepts['radius']['elements'], {opacity: 0})
      .then(()=> {
        this.currentConcept = this._concepts['apothem']['label'];
        this._$scope.$apply();
      });

    Velocity(this._concepts['apothem']['elements'], {opacity: 1}, 7000);
    Velocity(this._concepts['apothem']['elements'], {opacity: 0})
      .then(()=> {
        this.currentConcept = '';
        this.isEnableAnimation = true;
        this._$scope.$apply();
      });

  }


}

export default Concepts;

