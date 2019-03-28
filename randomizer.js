const shuffle = require('fisher-yates-shuffle')



//function to shuffle array

function randomList(arr) {
    const randomizer = function () {
        return Math.random()
    };
    const shuffledDeck = shuffle(arr, randomizer);
    return shuffledDeck;
}


//function to split array

function groups(teamArr, groupSize) {
    var index = 0;
    var arrayLength = teamArr.length;
    var tempArray = [];

    for (index = 0; index < arrayLength; index += groupSize) {
        myChunk = teamArr.slice(index, index + groupSize);
        // Do something if you want with the group
        tempArray.push(myChunk);
    }
    return tempArray;
}



module.exports = randomList;
module.exports = groups;



//var result = chunkArray([1,2,3,4,5,6,7,8], 3);
//console.log(result);
//const ids = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];