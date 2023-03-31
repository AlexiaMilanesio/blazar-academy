// *********************** HACKERRANK ************************** //

// ************************** ES 1 ***************************** //


/*
 * Complete the 'reverseArray' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function reverseArray(a) {
    // Write your code here
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


/*
 * Complete the 'simpleArraySum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY ar as parameter.
 */

function simpleArraySum(ar) {
    // Write your code here
    return ar.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}


// ************************** ES 3 ***************************** //


/*
 * Complete the 'staircase' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function staircase(n) {
    // Write your code here
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


/*
 * Complete the 'divisibleSumPairs' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER k
 *  3. INTEGER_ARRAY ar
 */

function divisibleSumPairs(n, k, ar) {
    // Write your code here
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


/*
 * Complete the 'compareTriplets' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 * 
 * 
 * If a[i] > b[i], then person a is awarded 1 point.
 * If a[i] < b[i], then person b is awarded 1 point.
 * If a[i] = b[i], then neither person receives a point.
 */

function compareTriplets(a, b) {
    // Write your code here
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


/*
 * Complete the 'hourglassSum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function hourglassSum(arr) {
    // Write your code here
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


// **************** EXTRA: MEDIUM DIFFICULTY ******************* //
// **************** Climbing the leaderboard ******************* //

/*
 * Complete the 'climbingLeaderboard' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY ranked
 *  2. INTEGER_ARRAY player
 */


function climbingLeaderboard(ranked, player) {
    let rankingNumbers = [];                                                // Leaderboard ranking positions/numbers of a player
    let scoresSet = [...new Set(ranked)];                                   // Not repeated leaderboard scores
    

    console.log(ranked);
    console.log(scoresSet);
    console.log(player);


    for (const score of player) {
        console.log(score);
        if (score >= scoresSet[0]) {                                        // Player's score is in the first position of the leaderboard
            console.log(score);
            rankingNumbers.push(1);                                         
        }
        else if (score < scoresSet[scoresSet.length - 1]) {                 // Player's score is in the last position of the leaderboard
            console.log(score);
            rankingNumbers.push(scoresSet.length + 1);
        } 
        else {
            console.log(score);
            rankingNumbers.push(calcMiddleRanking(score, scoresSet));       // Player's score is in the middle positions of the leaderboard}
        }

        console.log(rankingNumbers);
    }

    return rankingNumbers;
}

function calcMiddleRanking(score, scoresSet) {
    let firstP = 0;
    let lastP = scoresSet.length - 1;
        
    while (true) {
        // Calculate amount of players to calculate the *middle position number*
        let middleP = Math.floor((firstP + lastP) / 2);


        console.log(middleP);
        console.log(score);
        

        // 1. Player's score is equal to middle score of the leaderboard 
        // --> position players's score 1 position down from the middle of the leaderboard
        if (scoresSet[middleP] === score) {
            console.log(middleP);
            console.log(score);
            
            return middleP + 1;
        }

        // 2. Player's score is lower than middle score AND higher than the score below (middleP+1)
        // --> position player's score 2 positions down from the middle of the leaderboard
        else if (scoresSet[middleP] > score && scoresSet[middleP+1] < score) {
            console.log(middleP);
            console.log(score);

            return middleP + 2;
        }
        
        // 3. Player's score is higher than middle score AND lower than the score above (middleP-1)
        // --> position player's score 1 position above from the middle of the leaderboard
        else if (scoresSet[middleP] < score && scoresSet[middleP-1] > score) {
            console.log(middleP);
            console.log(score);

            return middleP - 1;
        }
        

        // 4.  *RECURSION*: Player's score is lower or higher than the existing scores on the leaderboard 
        // 4a. If player's score is lower than the score in the middle position, now the first position 
        //     will be the middleP+1 (first score of the leaderboard's second half where the lower scores are)
        if (score < scoresSet[middleP]) firstP = middleP + 1;

        // 4b. If player's score is higher than the score in the middle position, now the last position 
        //     will be the middleP-1 (last score of the leaderboard's first half where the lower scores are)
        else lastP = middleP - 1;
    }
}

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


// let ranked3 = [100, 90, 80, 50, 50, 40];
// let player3 = [30, 45, 75, 95, 105];

// const results3 = climbingLeaderboard(ranked3, player3);
// console.log(results3); 
// // rankingNumbers = [ 6, 5, 4, 2, 1];