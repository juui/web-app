import * as io from 'socket.io-client';

const root = 'https://www.juui.org';
//const root = 'http://localhost:3008';

class juuiSocket {

  /** @ngInject */
  constructor() {

    this._socket = io.connect(root + '/main');

    this._socket.on('connect', ()=> {
      console.log('main', 'connect');
    });

    this._socket.on('identification', (result)=> {
      this._id = result.id;
      console.log('main', 'identification', 'id:', this._id);
    });

    this._socket.on('disconnect', ()=> {
      console.log('main', 'disconnect');
    });

  }

}

export default juuiSocket;