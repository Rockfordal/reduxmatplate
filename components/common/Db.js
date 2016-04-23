import {authheaders} from './auth';
import $ from 'jquery';


class Db {
    constructor() {
      this.baseurl = 'http://localhost:2480';
      this.settings = {
          type: 'GET',
          crossDomain: true,
          headers: authheaders,
          error: this.logerror
      }
    }
    logerror() {
        console.log('Naaaj!  Hittade ingen data . Är OrientDB igång?');
    }
    query(db, query, success) {
        const url = this.baseurl + '/query/' + db + '/sql/' + query;
        const options = { url: url,
                          success: success };
        $.extend(options, this.settings);
        $.ajax(options);
    }
    getdocument(db, id, success) {
        const url = this.baseurl + '/document/' + db + '/' + id;
        const options = { url: url,
                          success: success };
        $.extend(options, this.settings);
        $.ajax(options);
    }
}

export default Db;
