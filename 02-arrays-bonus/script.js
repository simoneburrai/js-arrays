const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
console.log(teachers);
const reversedTeachers = [];
for(let i= 0; i<= teachers.length - 1; i++){
const teacherName = teachers[(teachers.length -1) - i];
reversedTeachers.push(teacherName);
}
console.log(reversedTeachers);

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = [];
console.log(teachers);
for(i=0; i < teachers.length; i++){
  teacherName = teachers[i];
  if (teacherName.length >= 5){
    longNames.push(teacherName)
  }
}
console.log(longNames);

// 3. Rimuovi 'Ed' dall'array teachers

// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
let isFabioPresent;
for(i=0; i <= teachers.length; i++){
  if (teachers[i] === "Fabio"){
    isFabioPresent = true;
    console.log(`${teachers[i]} è presente e ha index uguale ${i}`);
  }
}

// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString
let teachersString = "";
console.log(teachers);
commaAndSpace = ", ";
for(i=0; i<= teachers.length-1; i++){

  if (i === teachers.length -1){
    teachersString += teachers[i];
  }else {
    teachersString += teachers[i] + commaAndSpace;
  }
}
console.log(teachersString);