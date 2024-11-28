// D-TASK:

// Shunday function tuzing, u 2ta string parametr ega bolsin, hamda agar har ikkala string bir hil harflardan iborat bolsa true aks holda false qaytarsin
// MASALAN checkContent("mitgroup", "gmtiprou") return qiladi true;


function checkContent(string1, string2) {
  const str1 = string1.split("").sort().join('');
  const str2 = string2.split('').sort().join('');

  return str1 === str2;


 }


console.log(checkContent('mengg','nem'));






// C- Task
// MITASK-C

// Shunday class tuzing tuzing nomi Shop, va uni constructoriga 3 hil mahsulot pass bolsin, hamda classning 3ta methodi bolsin, biri qoldiq, biri sotish va biri qabul. Har bir method ishga tushgan vaqt ham log qilinsin.
// MASALAN: const shop = new Shop(4, 5, 2); shop.qoldiq() return hozir 20:40da 4ta non, 5ta lagmon va 2ta cola mavjud! shop.sotish('non', 3) & shop.qabul('cola', 4) & shop.qoldiq() return hozir 20:50da 1ta non, 5ta lagmon va 6ta cola mavjud!


// Masalani yechimi

// const moment = require('moment');

// const now = new Date;
// const hozir = now.toLocaleTimeString();

// class Shop {

//     constructor(non, lagmon, cola){
//       this.non = non;
//       this.lagmon = lagmon;
//       this.cola = cola;
//     }

//    qoldiq(){
//      console.log(`Hozir ${hozir}da  ${this.non} ta non, ${this.lagmon} ta lagmon va ${this.cola} ta cola mavjud!`);
//    }
//     sotish(non, raqam){
//      this.non = this.non - raqam;
//      console.log(`Hozir ${hozir} da ${this.non} ta non ${this.lagmon} ta lagmon va ${this.cola} ta cola mavjud! `);
//    }
//    qabul(cola, raqam){

//     console.log(`Hozir  ${hozir} da ${this.non} ta non ${this.lagmon} ta lagmon va ${this.cola} ta cola mavjud!` );
//    }
//     qoldiq(){
//      console.log(`Hozir ${hozir}da  ${this.non} ta non, ${this.lagmon} ta lagmon va ${this.cola} ta cola mavjud!`);
//    }


//   }
//  const shop = new Shop(5, 5, 2);
//   shop.qoldiq();
//   shop.sotish('non',5);
//   shop.qabul('cola',4);
//   shop.qoldiq();








// B-TASK:

// Shunday function tuzing, u 1ta string parametrga ega bolsin, hamda osha stringda qatnashgan raqamlarni sonini bizga return qilsin.
// MASALAN countDigits("ad2a54y79wet0sfgb9") 7ni return qiladi.


// masalani yechimi

// function countLetter(inputString) {
//      let count = 0;
//      inputString.split("").forEach(char => {
//          if (char === char) {
//              count++;
//          }
//      });
//      return count;
//    }

//    console.log(countLetter("hello666666"));









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
