// module.exports = {
//   // mongoURI: 'mongodb://dev:hbNJXqg2wmaMF7wm@cluster.mongodb.net/MERNdb?retryWrites=true&w=majority'
//   mongoURI: 'mongodb://dev:hbNJXqg2wmaMF7wm@cluster0-shard-00-00.4uau2.mongodb.net:27017,cluster0-shard-00-01.4uau2.mongodb.net:27017,cluster0-shard-00-02.4uau2.mongodb.net:27017/MERNdb?ssl=true&replicaSet=atlas-nb8dvk-shard-0&authSource=admin&retryWrites=true&w=majority',
//   // mongoURI: 'mongodb://dev:hbNJXqg2wmaMF7wm@cluster0.4uau2.mongodb.net/MERNdb?retryWrites=true&w=majority'

//   secretOrKey: 'secret'
// }


if (process.env.NODE_ENV === 'production') {
  module.exports = require('./keys_prod');
} else {
  module.exports = require('./keys_dev');
}