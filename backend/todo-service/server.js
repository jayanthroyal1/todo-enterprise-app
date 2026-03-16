const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.json({ message: 'Todo Api running' });
});
const Port = 5000;

app.listen(Port, () => {
  console.log('Server running on port:', Port);
});
