class TotalDiagonals {

  constructor() {
    this._render();
  }

  _render(){

    console.log('render');
    MathJax.Hub.Queue(['Typeset', MathJax.Hub, 'totalDiagonals-1']);

  }

}

export default TotalDiagonals;