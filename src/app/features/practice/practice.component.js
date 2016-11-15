class PracticeController {

  /** @ngInject */
  constructor() {
    this._timerRender = undefined;
    this._tryRender();

    let mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.scrollTop = 0;
    }
  }

  $onInit() {
  }

  $onDestroy() {
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

export const practice = {
  template: require('./practice.template.html'),
  controller: PracticeController,
  controllerAs: 'practiceController',
  selector: 'juuiPractice'
};
