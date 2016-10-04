class Diagonal {

  constructor() {

    this._canvas = Snap('#svg-diagonal');
    this._canvas.attr({viewBox: '0 0 223.73523 224.44361'});
    Snap.load(require('./assets/diagonal-concept-1.svg'),
      (svg)=> {
        this._canvas.append(svg);

        this._diagonalA = this._canvas.path('m 36.042109,125.86762 151.123211,-0.10062 -0.10062,0');
        this._diagonalA.attr({
          id: "squiggle",
          fill: "none",
          strokeWidth: "4",
          stroke: "#ffffff",
          strokeMiterLimit: "10",
          strokeDasharray: "9 9",
          strokeDashOffset: "988.01"
        });

        this._diagonalAlen = this._diagonalA.getTotalLength();

        this.automaticDiagonal();

      });

  }

  automaticDiagonal() {

    this._diagonalA.attr({
      stroke: 'red',
      strokeWidth: 4,
      fill: 'none',
      transform:'translate(22.728436,-22.800408)',
      // Draw Path
      "stroke-dasharray": this._diagonalAlen + " " + this._diagonalAlen,
      "stroke-dashoffset": this._diagonalAlen
    }).animate({"stroke-dashoffset": 10}, 2500, mina.easeinout);

    setTimeout(()=> {
      Snap.animate(0, this._diagonalAlen, (value)=> {
        const movePoint = this._diagonalA.getPointAtLength(value);
        //CircleB.attr({cx: movePoint.x, cy: movePoint.y}); // move along path via cx & cy attributes
      }, 2500, mina.easeinout);
    });

  }

}

export default Diagonal;