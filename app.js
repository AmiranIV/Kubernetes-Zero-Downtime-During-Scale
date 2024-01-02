const express = require('express');
const app = express();
const port = 3000;

// This variable indicates server readiness
let ready = false;
// --------------------------------------------------- //

app.get('/', (req, res) => {
  let x = 0.0001;
  for (let i = 0; i <= 1000000; i++) {
    x += Math.sqrt(x);
  }
  res.send('OK ');
});

app.get('/ready', (req, res) => {
  // TODO return status code 200 if server is ready (indicated by the `ready` variable), otherwise 503.
  if (ready) {
    res.status(200).send('Server is ready');
  } else {
    res.status(503).send('Server is not ready');
  }
});

app.get('/health', (req, res) => {
  res.status(200).send('Health check passed');
});

// This handler is called whenever k8s sends a SIGTERM to the container, before terminating the Pod
process.on('SIGTERM', () => {
  console.log('SIGTERM signal received: closing HTTP server');

  ready = false;

  // If the server is not ready, delay the closing until it's ready
  if (!ready) {
    setTimeout(() => {
      server.close(() => {
        console.log('HTTP server closed');
      });
    }, 2000); // You can adjust the delay time as needed
  } else {
    server.close(() => {
      console.log('HTTP server closed');
    });
  }
});

// This function call sets the `ready` variable to be `true` after 20 seconds of server running
setTimeout(() => {
  const server = app.listen(port, '0.0.0.0', () => {
    console.log("Server running");
  });

  ready = true;
}, 20000);
