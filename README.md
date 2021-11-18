

# Twilio Pokemon Emulator

This is a variation on the [Twilio blogpost](https://www.twilio.com/blog/playing-pokemon-via-sms-with-node-js-and-twilio) with a tribute to the classic Hugo game, that used to be played by phone on the Israeli Channel 6.

Apparently, [this was maybe not real](https://www.haaretz.co.il/captain/games/.premium-1.10125772), However, this small implementation is :)


## Requirements:
* Twilio account with a Phone Number
* ngrok account \  host for the project
* An running emulator with a game you want to play 


## How to start:


1. Clone the project
2. `npm install`
3. `ngrok http 3000`
4. Add `[your-public-url]/sms` &  `[your-public-url]/voice` for Twilio's webhooks
5. `npm start`


## How to play:

Call the number & enter digits \ SMS a single digit every time:

```
const keyMap = {
  2: 'up',
  4: 'left',
  6: 'right',
  8: 'down',
  5: 'x', //Confirm
  0: 'z', //Cancel
};
```

