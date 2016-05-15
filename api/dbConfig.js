import r from 'rethinkdb';

const config = {
  host: 'localhost',
  port: 28015
}

function connect() {
  return r.connect(config);
}

export default connect;
