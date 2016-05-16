import r from 'rethinkdb';
import config from 'config';

function connect() {
  return r.connect(config.get('rethinkdb'));
}

export default connect;
