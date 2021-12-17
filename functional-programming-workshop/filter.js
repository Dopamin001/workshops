function getShortMessages(messages) {
    const message = messages.map(message => Object.values(message)).map(e => e.filter(m => m.length < 50));
    const smallermessages = [].concat(...message);
    return smallermessages
    
  }

  module.exports = getShortMessages