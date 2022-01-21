
/* Opdracht  1 */

function getEmailDomain(email) {
    const domain = email.split("@");
    return domain[1];
}

console.log(getEmailDomain("n.eeken@novi-education.nl"));
console.log(getEmailDomain("t.mellink@novi.nl"));
console.log(getEmailDomain("a.wiersma@outlook.com"));


/* Opdracht  2 */


function typeOfEmail(String) {
    const domain = String.split("@");
    if (domain[1] === "novi-education.nl") {
        return "Student"
    } else if (domain[1] === "novi.nl") {
        return "Medewerker"
    } else {
        return "Extern"
    }
}

console.log(typeOfEmail("n.eeken@novi-education.nl"));
console.log(typeOfEmail("t.mellink@novi.nl"));
console.log(typeOfEmail("novi.nlaapjesk@outlook.com"));
console.log(typeOfEmail("a.wiersma@outlook.com"));

/* Opdracht  3 */

function checkEmailValidity(email) {
    const endOfString = email.length - 1;
    const isThereAComma = email.includes(",");
    const isThereAnAt = email.includes("@");
    const dotAtEnd = email.lastIndexOf(".");
    const noDotAtEnd = dotAtEnd != endOfString;

    if (isThereAnAt && noDotAtEnd && !isThereAComma) {
        return true
    } else {
        return false;
    }

}

console.log(checkEmailValidity("n.eeken@novi.nl"));
console.log(checkEmailValidity("tessmellink@novi.nl"));
console.log(checkEmailValidity("n.eeken@novinl."));
console.log(checkEmailValidity("n.eekenanovi.nl"));
console.log(checkEmailValidity("tessmellink@novi,nl"));