// function getShortMessages(messages) {
//     console.log(messages)
//     const message = messages.map(message => Object.values(message)).map(e => e.filter(m => m.length < 50)).flat(1);
//     const smallermessages = [].concat(...message);
//     return smallermessages
    
//   }

function getShortMessages(messages){
  return messages.map(({message}) => message).filter((msg) => msg.length < 50)
}

  module.exports = getShortMessages
