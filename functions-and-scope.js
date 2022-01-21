
const grades = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];

/* Opdracht  1: Cum Laude */

/* 1a: Script schrijven  */

// ---- Verwachte uitkomst: 6


function checkCumLaude() {
    let cumLaudeStudents = 0;
    for (let i = 0; i < grades.length; i++) {
        if (grades[i] >= 8) {
            cumLaudeStudents++;
        }
    }
    return cumLaudeStudents
}

const howMany = checkCumLaude(grades);

console.log(`There are ${howMany} students who passed Cum Laude`);
/*  1b: Omschrijven tot een herbruikbare functie   */

// ---- Verwachte uitkomsten:
// cumLaude(grades) geeft 6
// cumLaude([6, 4, 5]) geeft 0
// cumLaude([8, 9, 4, 6, 10]) geeft 3

function checkCumLaude(gradeList) {
    let cumLaudeStudents = 0;
    for (let i = 0; i < grades.length; i++) {
        if (gradeList[i] >= 8) {
            cumLaudeStudents++;
        }
    }
    return cumLaudeStudents
}

const howManyCumLaude = checkCumLaude(grades);
const howMany2 = checkCumLaude([6, 4, 5]);
const howMany3 = checkCumLaude([8, 9, 4, 6, 10]);

console.log(`There are ${howManyCumLaude} students who passed Cum Laude`);
console.log(`There are ${howMany2} students who passed Cum Laude`);
console.log(`There are ${howMany3} students who passed Cum Laude`);
/* Opdracht  2: Gemiddeld cijfer */

/* 2a: Script schrijven  */

// ---- Verwachte uitkomst: 6.642857142857143


let sumOfGrades = 0;
let howManyGrades = grades.length;
for (let i = 0; i < grades.length; i++) {
    sumOfGrades = sumOfGrades + grades[i];
}
let averageGrade = sumOfGrades / howManyGrades;

console.log(averageGrade);
/* 2b: Omschrijven tot een herbruikbare functie */
// ---- Verwachte uitkomsten:
// averageGrade(grades) geeft 6.642857142857143
// averageGrade([6, 4, 5]) geeft xxxx
// averageGrade([8, 9, 4, 6, 10]) geeft xxxx
function calcAverage(gradeList) {
    let sumOfGrades = 0;
    let howManyGrades = gradeList.length;
    for (let i = 0; i < gradeList.length; i++) {
        sumOfGrades = sumOfGrades + gradeList[i];
    }
    let averageGrade = sumOfGrades / howManyGrades;
    return averageGrade;
}

console.log(calcAverage(grades));
console.log(calcAverage(([6, 4, 5])));
console.log(calcAverage([8, 9, 4, 6, 10]));

/* 2c: Afronden op twee decimalen */
// Zorg ervoor dat het gemiddelde cijfer dat wordt teruggegeven uit de functie netjes wordt afgerond op twee decimalen.
// Tip: Google is your best friend!

function calcAverage(gradeList) {
    let sumOfGrades = 0;
    let howManyGrades = gradeList.length;
    for (let i = 0; i < gradeList.length; i++) {
        sumOfGrades = sumOfGrades + gradeList[i];
    }
    let averageGrade = sumOfGrades / howManyGrades;
    return averageGrade;
}

const outcome = calcAverage(grades).toFixed(2);
console.log(outcome);

/* Bonusopdracht: hoogste cijfer */

/* 3a: Script schrijven  */

// ---- Verwachte uitkomst: 9

let highestGrade = 0;
for (let i = 0; i < grades.length; i++) {
    if (grades[i] > highestGrade) {
        highestGrade = grades[i]
    }
}
console.log(highestGrade);
/* 3b: Omschrijven tot een herbruikbare functie */
// ---- Verwachte uitkomsten:
// highestGrade(grades) geeft 9
// highestGrade([6, 4, 5]) geeft 6
// highestGrade([8, 9, 4, 6, 10]) geeft 10

function highestGrade(gradeList) {
    let highestGrade = 0;
    for (let i = 0; i < gradeList.length; i++) {
        if (gradeList[i] > highestGrade) {
            highestGrade = gradeList[i]
        }
    }
    return highestGrade;
}

console.log(highestGrade(grades));
console.log(highestGrade([6, 4, 5]));
console.log(highestGrade([8, 9, 4, 6, 10]));