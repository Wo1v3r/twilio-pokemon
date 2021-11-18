const { twiml } = require('twilio');

function createGatherResponse({ sayText } = {}) {
  const voiceResponse = new twiml.VoiceResponse().gather({
    timeout: 20,
    numDigits: 1,
    action: '/voice/action',
  });

  if (sayText) {
    voiceResponse.say(sayText);
  }

  return voiceResponse.toString();
}

function getTwilioDigit(request) {
  const message = request.body.Digits || request.body.Body;
  return message.toString().toLowerCase()[0];
}

module.exports = {
  createGatherResponse,
  getTwilioDigit,
};
