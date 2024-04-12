// 1. Write a program that checks if a given number is even or odd.
// const Even_Odd=(number)=>{
//     if(number%2==0){
//         return 'Even'
//     }
//     else{
//         return 'Odd'
//     }
// }
// let result=even_odd(34);
// console.log("the number is",result)

// 2. Create a function that takes two numbers as parameters and returns the larger one.

// const largetOne=(a,b)=>{
//      if(a>b){
//         return a
//      }
//      else{
//         return b
//      }
// }
// let result=largetOne(12,63);
// console.log('the largest one is ',result);

// 3. Write a function that determines if a given year is a leap year.
// const Leap_Year=(year)=>{
//     if ((year%400==0) || (year%100!=0 && year%4==0)){
//         return 'this year is leap year';
//     }
//     else{
//         return 'this year is not leap year';
//     }
// }
// let result=Leap_Year(2003);
// console.log(result);


// 4. Implement a program that checks whether a given character is a vowel or consonant.

// const Check_Character=(string)=>{
//      if ((string==='a' || string==='A') && (string==='e' || string==='E') && (string==='i' || string==='I') && (string==='o' || string==='O') && (string==='u' || string==='U')){
//         return 'this character is Vowel'
//      }
//      else{
//         return 'this character is consonant'
//      }
// }
// let result=Check_Character('t');
// console.log(result);

// 5. Create a function that takes three numbers as input and returns the largest among them.
// const LargestInThree=(a,b,c)=>{
//       if (a>b && a>c){
//         return a
//       }
//       else if(b>c && b>a){
//         return b
//       }
//       else{
//         return c
//       }
// }
// let result=LargestInThree(2,6,1);
// console.log('the largest one is',result);

// 6. Write a program that checks if a given number is positive, negative, or zero.
// const Check_Number=(number)=>{
//        if(number<0){
//         return 'The number is Nagative';
//        }
//        else if(number==0){
//         return 'The number is Zero';
//        }
//        else{
//         return 'the number is Positive';
//        }
// }
// let result=Check_Number(5);
// console.log(result);

// 7. Implement a function that calculates the grade of a student based on their score.

// const Grade=(score)=>{
//     if (score>90){
//         return 'Grade A'
//     }
//     else if (score>80 && score<90){
//         return 'Grade B'
//     }
//     else if (score>70 && score<80){
//         return 'Grade C'
//     }
//     else if (score>60 && score<70){
//         return 'Grade D'
//     }
//     else{
//         return 'Grade E'
//     }
// }
// let result=Grade(56);
// console.log('Your Grade is ',result)

// 8. Create a program that determines if a given string is a palindrome.

// const Palindrome = (str) => {
//     let str1=str;
//     let string_1='';
//     for (let i=str.length-1;i>=0;i--){
//         string_1+=str[i];
//     }
//     if(str1===string_1){
//         return "it is palindrome";
//     }
//     else{
//         return "it is not palindrome";
//     }
// }
// let result = Palindrome('mom');
// console.log(result);

// 9. Write a function that checks whether a person is eligible to vote based on their age.

// const Eligible_for_Vote=(age)=>{
//       if(age>=18){
//         return 'you are Eligible for Vote'
//       }
//       else{
//         return 'you are Not Eligible for Vote'
//       }
// }
// let result=Eligible_for_Vote(18);
// console.log(result)

// 10. Implement a program that determines the type of a triangle based on the lengths of its sides.

// const triangle_type=(a, b, c)=>{
//     if (a == b == c){
//         return "Equilateral triangle"
//     }
//     else if  (a == b || b == c || a == c){
//         return "Isosceles triangle"
//     }
//     else{
//         return "Scalene triangle"
//     }
// }
// let triangle = triangle_type(40,30,40)
// console.log("The triangle is:", triangle)

