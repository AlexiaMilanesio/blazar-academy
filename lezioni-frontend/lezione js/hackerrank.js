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
    let reversedArray = [];

    for (let i = a.length - 1; i >= 0; i--) {          
        reversedArray.push(a[i]);
    }

    return reversedArray;
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
    return ar.reduce((accumulator, currentValue) => accumulator + currentValue);
}


// ************************** ES 3 ***************************** //


/*
 * Complete the 'staircase' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function staircase(n) {
    // Write your code here
    for (let i = 0; i < n; i++) {              // while i is smaller than n or smaller or equal to n - 1
        let staricase = "";

        for (let j = 0; j < n-i-1; j++) {      // while j is smaller than "n - iteration number - 1"
            staricase += " ";
        }   

        for (let k = 0; k < i+1; k++) {        // while k is smaller than "iteration number + 1"
            staricase += "#";                  
        }

        console.log(staricase);
    }
}


//* n = 5
//* ssss#  --->  i=0  s=4  #=1  
//         --->  s = n-i-1 | s=5-0-1   | s = 4  
//         --->  # = i+1   | # = 0 + 1 | # = 1
//* sss##  --->  i=1  s=3  #=2  
//         --->  s = n-i-1 | s=5-1-1   | s = 3  
//         --->  # = i+1   | # = 1 + 1 | # = 2 
//* ss###  --->  i=2  s=2  #=3  
//         --->  s = n-i-1 | s=5-2-1   | s = 2  
//         --->  # = i+1   | # = 2 + 1 | # = 3 
//* s####  --->  i=3  s=1  #=4  
//         --->  s = n-i-1 | s=5-3-1   | s = 1  
//         --->  # = i+1   | # = 3 + 1 | # = 4 
//* #####  --->  i=4  s=0  #=5  
//         --->  s = n-i-1 | s=5-4-1   | s = 0  
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
        for(let j = i + 1; j < n; j++) {
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
    let score = [0,0];

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

}