class HomeController {

  constructor() {
    this.timer = setInterval(() => {
      this.loadFacebookElements()
    }, 1000);
  }

  $onInit() {
    console.log('Init Home');
    this.loadFacebookElements();
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
  controller: HomeController
};
