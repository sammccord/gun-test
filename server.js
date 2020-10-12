const Gun = require('gun')
const http = require('http')

const server = http.createServer()

Gun({ web: server.listen(process.env.PORT || 8765) })
