//Declares Name to varibles so can be ajusted if needed
let suspect1 = 'Stuart';
let suspect2 = 'Liam';
let suspect3 = 'Leona';
let suspect4 = 'Dean';
const deadBody = 'Jay';
let enterName;
let playerName;
let beginGame;
let jayDead = 0; //Used for name easter egg
let roomsSearched = 0;
let Bio1; 
let Bio2; 
let Bio3; 
let Bio4;
let talkedTo = 0;
let roomCount = 0;
const ClueA = (`A note that reads "Team meetup at 7pm - everyone must attend!`);
const ClueB = (`A receipt for one small Starbucks Americano`);
const clueC = (`A note from ${suspect1} that reads ${deadBody} get three coffees - make sure mine is a Latte Macchiato`);
const clueD = (`Amazon receipt for delivery of Advanced Nodejs Reference.`);
const clueE = (`The Sign-in sheet shows ${suspect1}, ${suspect2} and ${deadBody} were the only ones in the building at 8pm`);


let arrayFound = [];

let arrayRooms = [
    'office', 'kitchen', 'lobby'
];

let arraychoice = [
    suspect1, suspect2, suspect3, suspect4
];


const userGuess = () => {
    let choices = arraychoice.join(' ')
    let guess = prompt(`Who do you think commited the murder ${choices}`);
    if (guess.toLowerCase() == suspect1) {
        delete arraychoice[0];
        alert(`Congratulations you solved the murder`);
    } else {
        if (guess.toLowerCase() == suspect2) {
            delete arraychoice[1];
            alert(`${youFailed}`);
        } else {
            if (guess.toLowerCase() == suspect3) {
                delete arraychoice[2];
                alert(`${youFailed}`);
            } else {
                if (guess.toLowerCase() == suspect4) {
                    delete arraychoice[3];
                    alert(`${youDied}`);
                }
            }
        }
    }
}

// function to allow player to choose who they talk to
const allSpoken = () => {
    if (talkedTo < 4) {
        pickSuspect();
    } else {
        return;
    }
}

const pickSuspect = () => {
    let names = arraychoice.join(` `);
    let chosen = prompt(`Who do you want to talk to ${names}`);
    chosenName = chosen.charAt(0).toUpperCase();
    endOfChosen = chosen.substring(1).toLowerCase();
    chosenName = chosenName + endOfChosen;
    chosen = chosen.toLowerCase();
    if ((chosenName == suspect1) && (talkedTo <= 4)) {
        delete arraychoice[0];
        talkedTo++;
        alert(`${Bio1}`);
        allSpoken();
    } else {
        if ((chosenName == suspect2) && (talkedTo <= 4)) {
            delete arraychoice[1];
            talkedTo++;
            alert(`${Bio2}`);
            allSpoken();
        } else {
            if ((chosenName == suspect3) && (talkedTo <= 4)) {
                delete arraychoice[2];
                talkedTo++;
                alert(`${Bio3}`);
                allSpoken();
            } else {
                if ((chosenName == suspect4) && (talkedTo <= 4)) {
                    delete arraychoice[3];
                    talkedTo++;
                    alert(`${Bio4}`);
                    allSpoken();
                } else {
                    if (chosenName != arraychoice) {
                        alert(`please choose someone in the room to speak to`);
                        allSpoken();
                    }
                }
            }
        }
    }
}

const roomsChecked = () => {
    if (roomCount < 2) {
        pickRoom();
    } else {
        return;
    }
}

//function to allow player to pick room, each room is then removed for the array thus stopping repeat room visits
const pickRoom = () => {
    let rooms = arrayRooms.join(` `); //Create new array to display remaining room names without commas, hopefully will not display the undefined rooms
    let pickedRoom = prompt(`Pick a room to investigate ${rooms}`);
    pickedRoom = pickedRoom.toLowerCase();
    if (pickedRoom == 'office') {
        delete arrayRooms[0];
        roomCount++;
        alert(`${clueC}`);
        arrayFound.push(clueC);
        roomsChecked();
    } else {
        if (pickedRoom == 'kitchen') {
            delete arrayRooms[1];
            roomCount++;
            alert(`${clueD}`);
            arrayFound.push(clueD);
            roomsChecked();
        } else {
            if (pickedRoom == 'lobby') {
                delete arrayRooms[2];
                roomCount++;
                alert(`${clueE}`);
                arrayFound.push(clueE);
                roomsChecked();
            } else {
                if (pickedRoom != arrayRooms) {
                    alert(`Invalid room chosen, please try again`);
                    pickRoom();
                }
            }
        }
    }
}

//Function to search Jay's body for clues - only one choice will be accepted. 
const clothes = () => {
    alert(`${suspect1} "We should search the dead body for clues."`);
    alert(`${suspect1} "You take one item of clothing, I'll take the other"`)
    let input1 = prompt("Do you want to search Jay's jacket or trousers? [Type jacket or trousers]");
    input1 = input1.toLowerCase();
    if (input1 == "trousers") {
        alert(`You've found a note in the trousers pocket`);
        alert(ClueA);
        arrayFound.push(ClueA);
    }
    else {
        if (input1 == "jacket") {
            alert(`You've found a receipt in the jacket pocket`);
            alert(ClueB);
            arrayFound.push(ClueB);
        }
        else {
            alert("please pick either trousers or jacket");
            clothes();
        }
    }
}

//Functiomn to convert names with correct format and check the names do not clash with any of the predefined names, if they do it changed the predefined name to
//Robert or Roberta. Will refuse the name choice of Jay as Jay is dead.
const nameCheck = () => {
    enterName = prompt("Please enter your name: ");
    playerName = enterName.charAt(0).toUpperCase();
    endOfName = enterName.substring(1).toLowerCase();
    playerName = playerName + endOfName;
    if(playerName.length <= 2) {
    alert(`Name to Short`);
    nameCheck();
    } else {
        if((playerName == deadBody) && (jayDead == 0)) {
            alert(`Sorry ${deadBody} is dead, please pick another name`);
            jayDead++;
            nameCheck();
        } else { 
            if((playerName == deadBody) && (jayDead == 1)) {
                alert(`I said ${deadBody} is dead, PICK ANOTHER NAME`);
                jayDead++;
                nameCheck();
            } else {
                if((playerName == deadBody) && (jayDead == 2)) {
                    alert(`Really? You want to be the dead guy?`);
                    jayDead++;
                    nameCheck();
                } else {
                    if((playerName == deadBody) && (jayDead == 3)) {
                        alert(`Fine, you're the dead guy`);
                        alert(`and now there's nobody to solve the murder`);
                        alert(`Happy now?`);
                        alert('Goodbye dead person'); 
                        jayDead = 0;
                        nameCheck();
                    } else {
                        if(playerName == suspect1) {
                            suspect1 = 'Robert';
                            arraychoice = [
                                suspect1, suspect2, suspect3, suspect4
                            ];
                            Bio1 = (`Hi I'm ${suspect1}, I couldn't have murdered ${deadBody} as I was in the pub from 5pm.`);
                            Bio2 = (`Hi I'm ${suspect2}, I was working late all night in the office. I didn't see anything.`);
                            Bio3 = (`Hi I'm ${suspect3}, I saw ${deadBody} as I left the office at 6pm.`);
                            Bio4 = (`Hi I'm ${suspect4}, I had an urgent meeting with ${suspect1} at 6pm.`);
                        } else {
                            if(playerName == suspect2) {
                                suspect2 = 'Robert';
                                arraychoice = [
                                    suspect1, suspect2, suspect3, suspect4
                                ];
                                Bio1 = (`Hi I'm ${suspect1}, I couldn't have murdered ${deadBody} as I was in the pub from 5pm.`);
                                Bio2 = (`Hi I'm ${suspect2}, I was working late all night in the office. I didn't see anything.`);
                                Bio3 = (`Hi I'm ${suspect3}, I saw ${deadBody} as I left the office at 6pm.`);
                                Bio4 = (`Hi I'm ${suspect4}, I had an urgent meeting with ${suspect1} at 6pm.`);
                            } else {
                                if(playerName == suspect3) {
                                    suspect3 = 'Roberta';
                                    arraychoice = [
                                        suspect1, suspect2, suspect3, suspect4
                                    ];
                                    Bio1 = (`Hi I'm ${suspect1}, I couldn't have murdered ${deadBody} as I was in the pub from 5pm.`);
                                    Bio2 = (`Hi I'm ${suspect2}, I was working late all night in the office. I didn't see anything.`);
                                    Bio3 = (`Hi I'm ${suspect3}, I saw ${deadBody} as I left the office at 6pm.`);
                                    Bio4 = (`Hi I'm ${suspect4}, I had an urgent meeting with ${suspect1} at 6pm.`);
                                } else {
                                    if(playerName == suspect4) {
                                        suspect4 = 'Robert';
                                        arraychoice = [
                                            suspect1, suspect2, suspect3, suspect4
                                        ];
                                        Bio1 = (`Hi I'm ${suspect1}, I couldn't have murdered ${deadBody} as I was in the pub from 5pm.`);
                                        Bio2 = (`Hi I'm ${suspect2}, I was working late all night in the office. I didn't see anything.`);
                                        Bio3 = (`Hi I'm ${suspect3}, I saw ${deadBody} as I left the office at 6pm.`);
                                        Bio4 = (`Hi I'm ${suspect4}, I had an urgent meeting with ${suspect1} at 6pm.`);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
 }

//Funciton to begin the game
const shallWe = () => {
    beginGame = prompt(`Shall we begin? [yes/no]`);
    if (beginGame.toLowerCase() == "no") {
        alert(`Goodbye ${playerName}`);
        location = location;
    } else {
        if (beginGame.toLowerCase() == "yes") {
            return;
        } else {
            if (beginGame != 'no' && beginGame != 'yes');
            alert(`Please Enter yes or no`)
            shallWe();
        }
    }
}

//You Died Function
const youDied = () => {
    alert(`YOU DIED!`);
    alert(`Jay's Death Will Go Unsolved`);
    alert(`Poor Jay :'(`);
    location = location;
}

//You Failed Function
const youFailed = () => {
    alert(`YOU FAILED!`);
    alert(`Jay's Death Will Go Unsolved`);
    alert(`Poor Jay :'(`);
    location = location;
}


//Function to begin the game
const startGame = () => {
    nameCheck();
    shallWe();
    alert(`Hello ${playerName}, Welcome to a Murder at Office`);
    alert(`"What a lovely morning, I can't wait to get to work catch up with all my freinds"`);
    alert(`"Hmm, it seems very quiet out here today, I wonder where everyone is?"`);
    alert(`You arrive at the office to find four people stood around something on the floor`);
    alert(`You walk over to find out what is going on`);
    alert(`As you approach you notice the thing on the floor is a body!`);
    alert(`"Oh No!, Whats happened!"`);
    alert(`${suspect3} "it's ${deadBody}!, he's dead!!!"`);
    alert(`${suspect4} "Somebody has murdered him!"`);
    alert(`${suspect1} "Who would do such an terrible thing?"`);
    alert(`${suspect2} "Who will solve this horrible crime? Maybe you can help?"`);
    pickSuspect();
    clothes();
    alert(`${playerName} "I found a clue!, ${arrayFound}"`);
    alert(`${playerName} "I wonder what that means?`);
    alert(`${playerName} "${suspect1} did you find anything?"`);
    alert(`${suspect1} "I didn't find anything"`);
    alert(`Hmm... that seems suspicious`);
    alert(`${suspect4} "We need more clues, maybe if we search around we'll find some"`);
    alert(`${suspect3} "Excellent idea, lets get started!"`);
    pickRoom();
    alert(`${playerName} "Ok I've searched two rooms and found the following clues:"`)
    alert(`${arrayFound}`);
    alert(`Whist reviewing the clues you have found that the police have arrived`);
    alert(`Time to show off your detective skills to the professionals`);
    userGuess();
    //checkclues function
    //make accusations
    //ending
}