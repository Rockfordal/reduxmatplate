import * as $ from 'jquery';

const username = 'urkraft';
const password = 'programmering';

const make_base_auth = (user, password) => {
    let tok = user + ':' + password;
    let hash = btoa(tok);
    return "Basic " + hash;
};

const auth = make_base_auth(username, password);

export const authheaders = { Authorization: auth };
