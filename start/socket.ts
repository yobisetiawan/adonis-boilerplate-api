import User from 'App/Models/User'
import Ws from 'App/Services/WebService'
Ws.boot()

/**
 * Listen for incoming socket connections
 */
Ws.io.on('connection', (socket) => {
  socket.emit('news', { hello: 'world' })

  socket.on('my other event', async (data) => {
    console.log('connection from socket io')
    const user = await User.first()
    console.log(user?.serialize())
    console.log(data)
  })
})
