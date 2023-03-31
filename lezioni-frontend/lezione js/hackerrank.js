// *********************** HACKERRANK ************************** //


// ********************** EASY DIFFICULTY ********************** //

// ************************** ES 1 ***************************** //


function reverseArray(a) {
    return a.reverse();

    // let reversedArray = [];
    // for (let i = a.length - 1; i >= 0; i--) {          
    //     reversedArray.push(a[i]);
    // }
    // return reversedArray;
}

// i = a.length-1 | i = 5-1 | i = 4  
//   ---> we push to the new array the integer in the last position of the original array: a[4]
//        so we go from back to front pushing every integer on the original array into the new array


// ************************** ES 2 ***************************** //


function simpleArraySum(ar) {
    return ar.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}


// ************************** ES 3 ***************************** //


function staircase(n) {
    // for (let i = 0; i < n; i++) {              // while i is smaller than n or smaller or equal to n - 1
    //     let staircase = "";

    //     for (let j = 0; j < n-i-1; j++) {      // while j is smaller than "n - iteration number - 1"
    //         staircase += " ";
    //     }   
    //     for (let k = 0; k < i+1; k++) {        // while k is smaller than "iteration number + 1"
    //         staircase += "#";                  
    //     }
    //     console.log(staircase);
    // }

    let result = "";

    for (let i = 1; i <= n; i++) {
        const space = " ".repeat(n - i);
        const hashtag = "#".repeat(i);
        result += space + hashtag + "\n";
    }
    console.log(result);
}


//* n = 5
//* ssss#  --->  i=0  s=4  #=1  
//         --->  s = n-i-1 | s= 5-0-1 | s = 4  
//         --->  # = i+1   | # = 0 + 1 | # = 1
//* sss##  --->  i=1  s=3  #=2  
//         --->  s = n-i-1 | s= 5-1-1  | s = 3  
//         --->  # = i+1   | # = 1 + 1 | # = 2 
//* ss###  --->  i=2  s=2  #=3  
//         --->  s = n-i-1 | s= 5-2-1  | s = 2  
//         --->  # = i+1   | # = 2 + 1 | # = 3 
//* s####  --->  i=3  s=1  #=4  
//         --->  s = n-i-1 | s= 5-3-1  | s = 1  
//         --->  # = i+1   | # = 3 + 1 | # = 4 
//* #####  --->  i=4  s=0  #=5  
//         --->  s = n-i-1 | s= 5-4-1  | s = 0  
//         --->  # = i+1   | # = 4 + 1 | # = 5 


// ************************** ES 4 ***************************** //


function divisibleSumPairs(n, k, ar) {
    let counter = 0;

    for (let i = 0; i < n; i++) {
        for(let j = i+1; j < n; j++) {
            let sum = ar[i] + ar[j];
            if (sum % k === 0) {
                counter++;
            }   
        }
    }
    return counter;
}


// ************************** ES 5 ***************************** //


function compareTriplets(a, b) {
    let score = [0, 0];

    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            score[0]++;
        }
        if (a[i] < b[i]) {
            score[1]++;
        }  
    }
    return score;
}


// ************************** ES 6 ***************************** //


function hourglassSum(arr) {
    const sumHourglass = (row, col) => {                 // Sum the corresponding "coordinates" within the matrix
        return arr[row][col] + arr[row][col+1] + arr[row][col+2] + 
               arr[row+1][col+1] +
               arr[row+2][col] + arr[row+2][col+1] + arr[row+2][col+2]
    }
    
    let max = -Infinity;                               
    const sums = [];                                   
    
    for (let i = 0; i < arr.length - 2; i++) {         // Row moves (the array length is always 6, so we only can iterate through it 4 times)
        for (let j = 0; j < arr[i].length; j++) {      // Column moves
            const sum = sumHourglass(i, j);            // Calculate every possible sum
            
            max = sum > max ? sum : max;               // Calculate the maximum possible
        }
    }
    return max;
}



// ********************* MEDIUM DIFFICULTY ********************* //

// **************** Climbing the leaderboard ******************* //


function climbingLeaderboard(ranked, player) {
    let rankingNumbers = [];                                                
    let scoresSet = [...new Set(ranked)];  
    let index = scoresSet.length -1;

    for (const score of player) {

        console.log(index);
        console.log(scoresSet[index]);
        console.log(score);
        console.log(rankingNumbers);

        while (index >= 0) {
            // While player's score is higher or equal to the score on the current position of the leaderboard, decrement position in 1
            if (score >= scoresSet[index]) index--;

            // If player's score is lower than the score on the current position of the leaderboard, push the position to the rankingNumbers array
            // +2 because 1) index is not the same as position (+1) and 2) we have a number that repeats 1 time (+1) 
            else {
                rankingNumbers.push(index + 2);  
                break; 
            }
        }
        if (index < 0) rankingNumbers.push(1);
    }
    return rankingNumbers;
}



// ************************** TESTS *************************** //

let ranked1 = [100, 90, 90, 80, 75, 60];
let player1 = [50, 65, 77, 90, 102];

const results1 = climbingLeaderboard(ranked1, player1);
console.log(results1);
// rankingNumbers = [ 6, 5, 4, 2, 1 ];


// let ranked2 = [150, 90, 90, 80, 60, 50];
// let player2 = [45, 65, 80, 100, 160];

// const results2 = climbingLeaderboard(ranked2, player2);
// console.log(results2); 
// // rankingNumbers = [ 6, 4, 3, 2, 1 ];


// let ranked3 = [100, 90, 80, 50, 40, 40];
// let player3 = [30, 45, 75, 95, 105];

// const results3 = climbingLeaderboard(ranked3, player3);
// console.log(results3); 
// // rankingNumbers = [ 6, 5, 4, 2, 1];