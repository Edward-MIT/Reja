
// B-TASK:

// Shunday function tuzing, u 1ta string parametrga ega bolsin, hamda osha stringda qatnashgan raqamlarni sonini bizga return qilsin.
// MASALAN countDigits("ad2a54y79wet0sfgb9") 7ni return qiladi.


// masalani yechimi

function countLetter(inputString) {
     let count = 0;
     inputString.split("").forEach(char => {
         if (char === char) {
             count++;
         }
     });
     return count;
   }

   console.log(countLetter("hello"));









//  A - task
/* shunday ikki parametrli function tuzing , birinchi parametrdagi letterni
ikkinchi parametrdagi sozdan qatnashgan sonini return qilishi kerak bo'ladi
Masalan Countletter(" e " , "engineer") 3ni return qilsin  */

// Masalani yechimi

// function countLetter(letter, word) {
//   let count = 0;
//   word.split("").forEach(char => {
//       if (char === letter) {
//           count++;
//       }
//   });
//   return count;
// }

// console.log(countLetter("e", "engineer"));

// console.log("videodagi codelar lesson js faylga yozildi");
