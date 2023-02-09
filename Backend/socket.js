module.exports = socekts = (app) =>{
    const io = require('socket.io')(app, {
        cors: {
            origin: "*"
        }
    });

    io.on('connection', (socket) => {
        console.log(`⚡: ${socket.id} User connected`);
      
        socket.on('disconnect', () => {
          console.log('🔥: User disconnected');
        });
      
        socket.on('send message', (message, recipient) => {
            console.log(message);
            console.log(recipient);
          if (recipient === 'group') {
            io.emit('new message', message);
          } else {
            socket.to(recipient).emit('new message', message);
          }
        });
      
        socket.on('join', (room) => {
          socket.join(room);
          console.log(`User joined room: ${room}`);
        });
    });
}
