// FUNCTION
const year = 2026;
function getAge(bod){
    const age = year - bod;
    return age;
}

const agusAge = getAge(2001);
const udinAge = getAge(2002);

console.log(getAge(2001));

