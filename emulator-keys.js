const robotJS = require('robotjs');

const keyMap = {
  2: 'up',
  4: 'left',
  6: 'right',
  8: 'down',
  5: 'x', //Confirm
  0: 'z', //Cancel
};

function sendKeyStroke(digit) {
  const key = keyMap[digit];

  if (!key) {
    console.error(`Unknown key: ${key}`);
    return;
  }

  console.debug(`Sending Key: ${key}`);

  robotJS.keyToggle(key, 'down');
  setTimeout(() => {
    robotJS.keyToggle(key, 'up');
  }, 100);
}

module.exports = {
  sendKeyStroke,
};
