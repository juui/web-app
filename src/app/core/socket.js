import * as io from 'socket.io-client';

const root = 'https://www.juui.org';
//const root = 'http://localhost:3008';

class juuiSocket {

  /** @ngInject */
  constructor($log) {

    this._$log = $log;

    this._socket = io.connect(root + '/main');

    this._socket.on('connect', ()=> {
      this._$log.debug('main', 'connect');
    });

    this._socket.on('identification', (result)=> {
      this._id = result.id;
      this._$log.debug('main', 'identification', 'id:', this._id);
    });

    this._socket.on('disconnect', ()=> {
      this._$log.debug('main', 'disconnect');
    });

  }

}

export default juuiSocket;