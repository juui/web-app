class Diagonal {

  //base:http://codepen.io/anon/pen/ozorWA

  constructor(constants) {

    this._constants = constants;

    this._animationPoint = undefined;
    this._animationDiagonal = undefined;

    this._canvas = Snap('#svg-diagonal');
    this._canvas.attr({viewBox: '0 0 1280 720.00001'});
    Snap.load(require('./assets/diagonal-concept-2.svg'),
      (svg)=> {
        this._canvas.append(svg);

        this._diagonalA = this._canvas.path('m 398.0001,639.20975 c 481.84277,0 482.34784,0 482.34784,0');

        this._diagonalAlen = this._diagonalA.getTotalLength();

        this._circle = this._canvas.circle(16, 16, 8);
        this._circle.attr({
          fill: this._constants.blue,
          transform: 'translate(0,-332.36214)'
        });

        this.automaticDiagonal();

      });

  }

  stop() {
    if (this._animationDiagonal) {
      this._animationDiagonal.stop();
    }

    if (this._animationPoint) {
      this._animationPoint.stop();
    }
  }

  automaticDiagonal() {

    this.stop();

    this._diagonalA.attr({
      stroke: this._constants.pink,
      strokeWidth: 4,
      fill: 'none',
      transform: 'translate(0,-332.36214)',
      // Draw Path
      "stroke-dasharray": this._diagonalAlen + " " + this._diagonalAlen,
      "stroke-dashoffset": this._diagonalAlen
    });

    this._animationDiagonal = this._diagonalA.animate({"stroke-dashoffset": 10}, 2500, mina.easeinout);

    this._animationPoint = Snap.animate(0, this._diagonalAlen, (value)=> {
      const movePoint = this._diagonalA.getPointAtLength(value);
      this._circle.attr({cx: movePoint.x, cy: movePoint.y});
    }, 2500, mina.easeinout);

  }

}

export default Diagonal;