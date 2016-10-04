class Diagonal {

  //base:http://codepen.io/anon/pen/ozorWA

  constructor() {

    this._timer = undefined;
    this._animation = undefined;

    this._canvas = Snap('#svg-diagonal');
    this._canvas.attr({viewBox: '0 0 1280 720.00001'});
    Snap.load(require('./assets/diagonal-concept-2.svg'),
      (svg)=> {
        this._canvas.append(svg);

        this._diagonalA = this._canvas.path('m 399.28461,639.50456 c 483.28622,0 481.85,-0.71341 481.85,-0.71341');
        this._diagonalA.attr({
          id: "squiggle",
          fill: "none",
          strokeWidth: "4",
          stroke: "red",
          strokeMiterLimit: "10"
        });

        this._diagonalAlen = this._diagonalA.getTotalLength();

        this._circle = this._canvas.circle(16, 16, 8);
        this._circle.attr({
          id: "plane",
          fill: "red",
          transform: 'translate(0,-332.36214)'
        });

        this.automaticDiagonal();

      });

  }

  automaticDiagonal() {

    clearTimeout(this._timer);
    if (this._animation){
      this._animation.stop();
    }

    this._diagonalA.attr({
      stroke: 'red',
      strokeWidth: 4,
      fill: 'none',
      transform: 'translate(0,-332.36214)',
      // Draw Path
      "stroke-dasharray": this._diagonalAlen + " " + this._diagonalAlen,
      "stroke-dashoffset": this._diagonalAlen
    });

    this._animation = this._diagonalA.animate({"stroke-dashoffset": 10}, 2500, mina.easeinout);

    this._timer = setTimeout(()=> {
      Snap.animate(0, this._diagonalAlen, (value)=> {
        const movePoint = this._diagonalA.getPointAtLength(value);
        this._circle.attr({cx: movePoint.x, cy: movePoint.y});
      }, 2500, mina.easeinout);
    });

  }

}

export default Diagonal;