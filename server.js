const express = require('express');
const app = express();
const http = require('http').Server(app);

// Enable CORS for all routes
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// Serve your widget code
app.get('/script.js', (req, res) => {
  res.sendFile(__dirname + '/script.js');
});

// Serve your HTML page (optional)
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html'); // Replace with your actual HTML file
});

const PORT = process.env.PORT || 3000;
http.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
