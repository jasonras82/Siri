let express = require('express');
let app = express();
let port = 8000;
let messages = ["Hello there.", "I'm sorry, I cannot take any requests at this time.", "I can tell you how to do that."];

app.get('/', (req, res, next) => {
  res.send(messages);
});

// app.send('/', (req, res, next) => {
//   res.send({messages: messages});
// })

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
