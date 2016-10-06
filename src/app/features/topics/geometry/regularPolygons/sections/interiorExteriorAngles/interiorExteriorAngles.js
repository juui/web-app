class Angles {

  constructor(constants) {

    this._constants = constants;

    this._canvas = Snap('#svg-angles');
    Snap.load(require('./assets/angles-concept-p-2.svg'),
      (svg)=> {
        this._canvas.attr({viewBox: '0 0 1280 720.00001'});
        this._canvas.append(svg);

        this._lines = [
          {
            d: 'm 1533.9779,1163.057 62.773,-108.727',
            id: '#gE1',
            color: this._constants.pink
          }, {
            d: 'm 1783.1329,1593.0958 62.774,108.727',
            id: '#gE2',
            color: this._constants.orange
          },
          {
            d: 'm 1285.365,1592.3482 -125.547,0',
            id: '#gE3',
            color: this._constants.green
          }
        ];

        this._lineAnimetions = [];

        this._lines.forEach((line)=> {

          const path = this._canvas.path(line.d);
          path.attr({
            stroke: line.color,
            strokeWidth: 4,
            fill: 'none',
            transform: 'translate(0,-332.36214) translate(-862.85715,-685.71426)',
            style: 'opacity:1;stroke-linecap:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1'
          });

          const triangle = this._canvas.polyline('0,30 15,0 30,30');
          const triangleGroup = this._canvas.g(triangle);

          triangle.attr({
            transform: 'translate(0,-332.36214) translate(-862.85715,-685.71426)',
            fill: line.color
          });

          const angle = this._canvas.select(line.id);
          angle.attr({
            opacity: 0
          });

          let managerLine = undefined;
          let managerTriangle = undefined;

          let animation = {
            path: path,
            length: path.getTotalLength(),
            triangleGroup,
            angle,
            managerLine,
            managerTriangle
          };

          this._lineAnimetions.push(animation);

        });

        this.automaticAngles();

      });

  }

  stop() {

    this._lines.forEach((line)=> {
      if (line.managerLine) {
        line.managerLine.stop();
      }
      if (line.managerTriangle) {
        line.managerTriangle.stop();
      }
    });

  }

  automaticAngles() {

    this.stop();

    this._lineAnimetions.forEach((line)=> {

      line.angle.attr({
        opacity: 0
      });

      line.path.attr({
        // Draw Path
        'stroke-dasharray': line.length + ' ' + line.length,
        'stroke-dashoffset': line.length
      });

      line.managerLine = line.path.animate({'stroke-dashoffset': 10}, 2500, mina.easeinout);

      const max = line.length - 0.09;
      line.managerTriangle = Snap.animate(0, line.length, (value)=> {
        const movePoint = line.path.getPointAtLength(value);
        if (value < max) {
          line.triangleGroup.transform('t' + parseInt(movePoint.x - 15) + ',' + parseInt(movePoint.y - 15) + 'r' + (movePoint.alpha - 90));
        }
      }, 2500, mina.easeinout, ()=> {
        line.angle.attr({
          opacity: 1
        });
      });

    });

  }


}

export default Angles;