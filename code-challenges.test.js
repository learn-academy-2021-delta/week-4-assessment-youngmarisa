// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided.
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

var colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
var colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

//declare a test function called colorsArray that takes in an array parameter
describe ('colorsArray', () => {
  //the test method describes what the function will do
  //this function will take an input array and return a new array that removes the zero index of the array and shuffles the remaining values
   it('takes in an array and returns a new array that removes the first item from the array and shuffles the remaining content', () => {
     //write an expect meethod for each input
     //since we are shuffling the items in the array, use .toContain and list the strings of the colors that will be in the expect output
    expect(colorsArray(colors1)).toContain("blue", "green", "yellow", "pink")
    expect(colorsArray(colors2)).toContain("indigo", "periwinkle", "ochre", "aquamarine", "saffron")
  })
})
//FAIL :(

// // b) Create the function that makes the test pass.

//create a function colored colorsArray that takes in an array as a parameter
function colorsArray(array){
  //declare a new variable array that removes the zero index of the array using .slice()
  let newArr = array.slice(1)
  //write a for loop that will iterate through the array in a reverse order
    for(var i =newArr.length-1 ; i>0 ;i--){
      //create a new variable that generates a random index that ranges between 0 and i
        var j = Math.floor( Math.random() * (i + 1) ); //random index
        //swap the elemets with each other using a destructuring assigment
        [newArr[i],newArr[j]]=[newArr[j],newArr[i]]; // swap
    }

}

colorsArray(colors1)
colorsArray(colors2)



// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.

var nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
var nums2 = [109, 5, 9, 67, 8, 24]
// Expected output: [5, 109]

//declare a test function called minMaxArray that takes in an array parameter
describe ('minMaxArray', () => {
  //test method that explains what the function will do
  //the function will take in an array and return a new array with only the min and max numbers
  it('takes in an array and returns a new array with the minimum and maximum numbers', () => {
    //the expect method should take in one array and return a new array with only the min and max numbers in that order
    //write an expect method for each input
    expect(minMaxArray(nums1)).toEqual([-8, 90])
    expect(minMaxArray(nums2)).toEqual([5, 109])
  })
})



// b) Create the function that makes the test pass.

//declare a function (named minMaxArray) that takes in an array parameter
const minMaxArray = (array) => {
  // define a variable that returns the gratest value in the array
  // Math.max() returns the largest/greatest number in a parameter
  let max = Math.max(...array)
  // define a variable that returns the gratest value in the array
  // Math.max() returns the largest/greatest number in a parameter
  let min = Math.min(...array)
  // define a variable that creates a new array that takes in the least and greatest values of the input array
  let newArr = ([min, max])
  //return the new array containing the least and greatest values
  return newArr
}
minMaxArray(nums1)
minMaxArray(nums1)


// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values.
// STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

var testArray1 = [3, 7, 10, 5, 4, 3, 3]
var testArray2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]

//declare a test function called testArray that takes in two array
describe ('testArray', (testArray1, testArray2) => {
  //write a test method that explains what the function does
  //this function will take in two arrays, join the arrays and removes any duplicate number values
  it('takes in two arrays and returns one array with no duplicate values', () => {
    //the expect method should take in our two arrays and return one array with no duplicate values
    expect(testArray(testArray1.concat(testArray2))).toEqual([3, 7, 10, 5, 4, 8, 2, 1])
  })
})



// // // // // b) Create the function that makes the test pass.
//
//create a function called testArray that takes in two arrays as parameters
function testArray(array1, array2) {
  // create a new variable that combines the arrays using .concat
    var comboArr = array1.concat(array2)
    // write a for loop that loops through the new combined array
    // we want to returns the value after incrementing in order to see if there are any duplicates
    for(var i=0; i<comboArr.length; ++i) {
      // write another for loop that loops through the array to compare the values to find any duplicates
      //by writing two for loops you can compare the two arrays
      //the second for loop should start where the first for loop left off so write the new variable to equal i+1
        for(var j=i+1; j<comboArr.length; ++j) {
          // write another if statement to find if there are any duplicate values in the array
          // by writing comboArr[i] === comboArr[j] you are seeing if there are any values that are strictly equal to each other
            if(comboArr[i] === comboArr[j])
            //if there are duplicate values use .splice to remove duplicates
                comboArr.splice(j--, 1);
        }
    }
    //return the new array that has combined two arrays and removed any duplicates
    return comboArr;
}

testArray(testArray1, testArray2)
