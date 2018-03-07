var config = {};
config.web = {};

config.dbOptions = {
    db: { native_parser: true },
    server: {
        poolSize: 10,
        reconnectTries: Number.MAX_VALUE
    },
    user: 'everis-poc',
    pass: 'everis-poc'
};
config.dbEndpoint = 'mongodb://ds153015.mlab.com:53015/heroku_gqscj5zg';
config.web.port = process.env.PORT || 8080;
config.secret = 'BkBUltR453Cr3TP4sSW0Rd';
module.exports = config;
