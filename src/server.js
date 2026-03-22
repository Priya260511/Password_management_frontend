const express = require('express');
const path = require('path');
const app = express();

const buildPath = path.join(__dirname, '..', 'build');

// Serve static files from the React app build folder
app.use(express.static(buildPath));

// Catch all requests and return React's index.html
app.get('/{*splat}', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'));
});

// Listen on the port Azure provides, or 8080 by default
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});