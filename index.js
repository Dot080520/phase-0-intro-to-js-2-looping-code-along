
function writeCards(anArrayOfNames, event) {
    let messages = [];
    for (let i = 0; i < anArrayOfNames.length; i++) {
        //console.log(`Thank you, ${anArrayOfNames[i]}, for the wonderful ${event} gift!`);
        messages.push(`Thank you, ${anArrayOfNames[i]}, for the wonderful ${event} gift!`);
    }
    return messages;
}

function countDown(positiveNumber){
    let i = 10;
    while (i >= 0) {
      console.log(i--);
    }

}