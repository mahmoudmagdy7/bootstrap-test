// بسم الله الرحمن الرحيم
" ================ ASSIGNMENT 1 =================== ";
/* 
1.)
var userNumber = Number(prompt("Enter a number"));
console.log(userNumber);
*/

// ====================================================== //


/*
2.)
var number = 9;
if (number % 3 == 0 && number % 4 == 0){
  console.log('yes');
}else{
  console.log('no')
}
*/

// ====================================================== //


/*
3.)

var num1 = Number(prompt("Enter first number"));
var num2 = Number(prompt("Enter second number"));

if (num1 > num2) {
  console.log(num1);
} else {
  console.log(num2);
}
*/

// ====================================================== //


/*
4.)

var num = Number(prompt("Enter first number"));

if (num < 0) {
  console.log("negative");
} else if (num == 0) {
  console.log("Zero");
} else {
  console.log("positive");
}

*/

// ====================================================== //


/*
5.)
var num1 = 3,
  num2 = 1,
  num3 = 9;
if (num1 > num2 && num1 > num3) {
  console.log("the max is : " + num1);
} else if (num2 > num1 && num2 > num3) {
  console.log("the max is : " + num2);
} else {
  console.log("the max is : " + num3);
}

if (num1 < num2 && num1 < num3) {
  console.log("the min is : " + num1);
} else if (num2 < num1 && num2 < num3) {
  console.log("the min is : " + num2);
} else {
  console.log("the min is : " + num3);
}
 */

// ====================================================== //

/*
6.)
var number = 0;
if(number %2 == 0){
  console.log('even');
}else{
  console.log('odd');
}
*/

// ====================================================== //

/*
7.)
var isVowel = 'u';
if (
  isVowel == "a" || isVowel ==
  "A" || isVowel ==
  "e" || isVowel ==
  "E" || isVowel ==
  "i" || isVowel ==
  "I" || isVowel ==
  "o" || isVowel ==
  'O' || isVowel ==
  "u" || isVowel ==
  "U")
 {
  console.log("vowle");
} else {
  console.log("consonant");
}
*/

// ====================================================== //

/*
8.)
var num= 5;
for(var i = 1 ; i<= num; i++){
  console.log(i);
}
*/

// ====================================================== //

/*
9.)
var num = 0 , m = 5;
for (var i = 1; i <=12 ; i++){
  num = num +m;
  console.log(num);
}
*/

// ====================================================== //

/*
10.)
var num = 15;
for (var i = 1; i <= num; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}
*/
// ====================================================== //

/*
11.)

var number = 2 , power = 2, thePowerOf = 1;
for(var i = 1 ; i<= power; i++){
  thePowerOf *= number;
}
console.log(thePowerOf);
*/

// ====================================================== //

/*
12.)
var num1 = 56,
  num2 = 96,
  num3 = 45,
  num4 = 78,
  num5 = 88;
var total, average, percentage;
total = num1 + num2 + num3 + num4 + num5;
average = total / 5;
percentage = (total / 500) * 100;
*/

// ====================================================== //

/*
13.)
var month = prompt("Please enter a number of month between 1 to 12");
if (
  month == 1 ||
  month == 3 ||
  month == 5 ||
  month == 7 ||
  month == 8 ||
  month == 10 ||
  month == 12
) {
  console.log("Dayes in Month is : 31");
} else if (month == 4 || month == 6 || month == 9 || month == 11) {
  console.log("Dayes in Month is : 30");
} else if (month == 2) {
  console.log("Dayes in Month is : 28");
} else {
  month = prompt("Please enter a number of month between 1 to 12");
}
// 1 12 3 5 7 8 10
// 4 6 9 11
// 2
*/

// ====================================================== //

/*
14.)
var physics = 56,
  chemistry = 96,
  biology = 45,
  math = 78,
  cs = 88;
var total, average, percentage;
total = physics + chemistry + biology + math + cs;
percentage = (total / 500) * 100;
console.log(percentage);

if (percentage >= 90){
  console.log('Grade A');
}
else if (percentage >= 80){
  console.log('Grade B');
}
else if (percentage >= 70){
  console.log('Grade C');
}
else if (percentage >= 60){
  console.log('Grade D');
}
else if (percentage >= 40){
  console.log('Grade E');
}else{
  console.log('Grade F');
}
*/

/************************* Using switch case **********************/

/*
15.)
switch(month = 1){
  case (1):console.log("Dayes in Month is : 31");
  break;
  case (2):console.log("Dayes in Month is : 28");
  break;
  case (3):console.log("Dayes in Month is : 31");
  break;
  case (4):console.log("Dayes in Month is : 30");
  break;
  case (5):console.log("Dayes in Month is : 31");
  break;
  case (6):console.log("Dayes in Month is : 30");
  break;
  case (7):console.log("Dayes in Month is : 31");
  break;
  case (8):console.log("Dayes in Month is : 31");
  break;
  case (9):console.log("Dayes in Month is : 30");
  break;
  case (10):console.log("Dayes in Month is : 31");
  break;
  case (11):console.log("Dayes in Month is : 30");
  break;
  case (12):console.log("Dayes in Month is : 31");
  break;
  default:
    console.log('enter an number between 1 and 12');
}
*/

// ====================================================== //
/*
16.)
switch(isVowel = 'a'){
  case ('a'):console.log("Vowel");
  break;
  case ('A'):console.log("Vowel");
  break;
  case ('e'):console.log("Vowel");
  break;
  case ('E'):console.log("Vowel");
  break;
  case ('i'):console.log("Vowel");
  break;
  case ('I'):console.log("Vowel");
  break;
  case ('o'):console.log("Vowel");
  break;
  case ('O'):console.log("Vowel");
  break;
  case ('u'):console.log("Vowel");
  break;
  case ('U'):console.log("Vowel");
  break;
  default:
    console.log('Consonant');
}
*/

// ====================================================== //
/*
17.)
*/
'use strect'
var num1 = 88, num2 = 5;
switch(num1 > num2 ){
  case (true):console.log(num1);
  break;
  case (false):console.log(num2);
  break;
}
