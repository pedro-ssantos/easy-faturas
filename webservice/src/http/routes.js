const routes = (server) => {
  server.get('/', (req, resp, next) => {
    resp.send('Enjoy the silence!')
    next()
  })
}

module.exports = routes