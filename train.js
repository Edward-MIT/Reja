//  A - task
/* shunday ikki parametrli function tuzing , birinchi parametrdagi letterni
ikkinchi parametrdagi sozdan qatnashgan sonini return qilishi kerak bo'ladi
Masalan Countletter(" e " , "engineer") 3ni return qilsin  */

// Masalani yechimi

function countLetter(letter, word) {
  let count = 0;
  word.split("").forEach(char => {
      if (char === letter) {
          count++;
      }
  });
  return count;
}

console.log(countLetter("e", "engineer"));

console.log("videodagi codelar lesson js faylga yozildi");
