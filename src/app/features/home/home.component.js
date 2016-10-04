class HomeController {

  /** @ngInject */
  constructor($mdColors, $mdColorPalette) {

    this._$mdColors = $mdColors;
    this._$mdColorPalette = $mdColorPalette;

    //TODO: remove
    // this.colors = {
    //   favorite: $mdColors.getThemeColor('warn')
    // };

    this.timer = setInterval(() => {
      this.loadFacebookElements()
    }, 1000);
  }

  $onInit() {
  }

  $onDestroy() {
    clearInterval(this.timer);
  }

  loadFacebookElements() {

    if (window.FB) {
      console.log('loadFacebookElements');
      window.FB.XFBML.parse();
      clearInterval(this.timer);
    }
  }

}

export const home = {
  template: require('./home.template.html'),
  controller: HomeController,
  controllerAs: 'homeController',
  selector: 'juuiHome'
};
