const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 8080;
const PROXY = `http://${HOST}:${PORT}`;

module.exports = {
  host: HOST,
  port: PORT,
  proxy: PROXY
};
