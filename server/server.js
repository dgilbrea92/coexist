const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');

if (process.env.NODE_ENV === 'production') {
  app.use('/build', express.static(path.join(__dirname, '../build')));
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

app.listen(PORT, () => console.log('COVEXIST running'));
