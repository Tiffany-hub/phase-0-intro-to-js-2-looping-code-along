// Code your solutions in this file
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    debugger;
  }
  const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

wrapGifts(["Ada", "Brendan", "Ali"], "birthday");
function writeCards(names, eventName) {
    const cards = [];
    
    for (let i = 0; i < names.length; i++) {
      const message = `Dear ${names[i]}, you are invited to ${eventName}.`;
      cards.push(message);
    }
    
    return cards;
  }
  