// Code your solutions in this file
const cards = ["Guadalupe", "OLlie", "Aki"];

function writeCards(cards) {
    const thankYouMessages = [];
    for (let i = 0; i < cards.length; i++) {
      thankYouMessages.push(`Thank you, ${cards[i]}, for the wonderful surprise gift!`);
      debugger;
    }
    return thankYouMessages;
  }
  writeCards (cards);

  function countDown(number) {
    let countdown=0;
    for (let i = number; i >= 0; i--) {
      console.log(i);
    }
  }
  











