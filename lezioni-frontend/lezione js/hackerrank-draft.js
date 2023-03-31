// ********************* MEDIUM DIFFICULTY ********************* //

// **************** Climbing the leaderboard ******************* //


function climbingLeaderboard(ranked, player) {
    let rankingNumbers = [];                                                // Leaderboard ranking positions/numbers of a player
    let scoresSet = [...new Set(ranked)];                                   // Not repeated leaderboard scores
    

    console.log(ranked);
    console.log(scoresSet);
    console.log(player);


    for (const score of player) {
        console.log(score);
        if (score >= scoresSet[0]) {                                        // Player's score is in the first position of the leaderboard
            rankingNumbers.push(1);                                         
        }
        else if (score < scoresSet[scoresSet.length - 1]) {                 // Player's score is in the last position of the leaderboard
            rankingNumbers.push(scoresSet.length + 1);
        } 
        else {
            console.log(score);
            rankingNumbers.push(calcMiddleRanking(score, scoresSet));       // Player's score is in the middle positions of the leaderboard}
        }
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
        console.log(scoresSet[middleP]);
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

            return middleP;
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


// let ranked3 = [100, 90, 80, 50, 40, 40];
// let player3 = [30, 45, 75, 95, 105];

// const results3 = climbingLeaderboard(ranked3, player3);
// console.log(results3); 
// // rankingNumbers = [ 6, 5, 4, 2, 1];