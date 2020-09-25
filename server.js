const Pusher = require('pusher');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const pusher = new Pusher({
  appId: '1079290',
  key: '346aa30b9201bc2509da',
  secret: '0bcfe67ca7bd662dd9a0',
  cluster: 'us2',
  encrypted: true,
});

app.set('PORT', process.env.PORT || 5000);

app.post('/message', (req, res) => {
  const payload = req.body;
  pusher.trigger('chat', 'message', payload);
  res.send(payload);
});

app.listen(app.get('PORT'), () =>
  console.log('Listening at ' + app.get('PORT'))
);
