class Angles {

  constructor() {

    this._animationPoint = undefined;
    this._animationDiagonal = undefined;

    this._canvas = Snap('#svg-angles');
    Snap.load(require('./assets/angles-concept-1.svg'),
      (svg)=> {
        this._canvas.attr({viewBox: '0 0 1280 720.00001'});
        this._canvas.append(svg);
      });

  }


}

export default Angles;