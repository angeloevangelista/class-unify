console.clear();

import http from 'http';
import app from './app';

const PORT = process.env.PORT || 3333;
const server = http.createServer(app);

server
  .listen(PORT)
  .on('listening', () =>
    console.log(`Server is running at http://127.0.0.1:${PORT} 🚀`),
  )
  .on('error', () =>
    console.log(`An error occurred while starting the server`),
  );
