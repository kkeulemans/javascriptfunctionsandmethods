// Je gaat functies schrijven die we kunnen hergebruiken om sommige emailadressen te checken. Nu zul je gaan merken hoe handig functies kunnen zijn!
// Je zult hier methoden van het String Object voor nodig hebben, dus pak de paragraaf op EdHub over het String Object er even bij.


/* Opdracht  1 */
// Schrijf een functie genaamd getEmailDomain, die een emailadres verwacht en de domeinnaam teruggeeft. Een domeinnaam is hetgeen dat na het @ in het adres staat
// ---- Verwachte uitkomsten:
// getEmailDomain("n.eeken@novi-education.nl") geeft novi-education.nl
// getEmailDomain("t.mellink@novi.nl") geeft novi.nl
// getEmailDomain("a.wiersma@outlook.com") geeft outlook.com

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