const express = require('express');
const { sendKeyStroke } = require('./emulator-keys');
const { createGatherResponse, getTwilioDigit } = require('./twilio-adapter');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/sms', (req, res) => {
  // Twilio incoming SMS Webhook: send keystroke to emulator
  const digit = getTwilioDigit(req);

  sendKeyStroke(digit);

  res.status(200).send();
});

app.post('/voice', (_, res) => {
  // Twilio incoming voice Webhook: request Twilio to gather digits
  const response = createGatherResponse({
    sayText: 'Welcome to Poke Phone, Press any key',
  });

  res.set('Content-Type', 'text/xml');
  res.status(200).send(response);
});

app.post('/voice/action', (req, res) => {
  // Twilio action webhook: send keystroke to emulator & request Twilio to gather more digits
  const digit = getTwilioDigit(req);

  sendKeyStroke(digit);

  const response = createGatherResponse();
  res.status(200).send(response);
});

app.listen(3000, console.log('Twilio Pokemon app listening on port 3000.'));
