const BridgeMaker = {
  makeBridge(size, generateRandomNumber) {
    const bridge = [];

    for (let idx = 0; idx < size; idx++) {
      const randomNumber = generateRandomNumber();
      bridge.push(randomNumber ? 'U' : 'D');
    }

    return bridge;
  },
};

module.exports = BridgeMaker;
