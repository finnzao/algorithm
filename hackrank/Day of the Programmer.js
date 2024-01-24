///gregorian são 13 dias há mais do que julian 
// dia do programador é 256th 
 
function solve(year) {
    if (year == 1918)
        return "26.09.1918";

    else if (((year <= 1917) && (year % 4 == 0)) || ((year % 400 == 0) || ((year % 4 == 0) & (year % 100 != 0))))
        return "12.09." + year;
    
    else
        return "13.09." + year;
}

console.log(solve(2017))
function tesDayOfProgrammer(year) {
    if (!Number.isInteger(year) || Math.sign(year) === -1) { return "Please Giver a validation year" }
    const gregYear = {
        1: 30,
        2: year % 4 ? 29 : 28,
        3: 31,
        4: 30,
        5: 31,
        6: 30,
        7: 31,
        8: 31,
        9: 30,
        10: 31,
        11: 30,
        12: 31
    }
    const julianYear = {
        1: 30,
        2: year % 4 ? 28 : 29,
        3: 31,
        4: 30,
        5: 31,
        6: 30,
        7: 31,
        8: 31,
        9: 30,
        10: 31,
        11: 30,
        12: 31
    }


    if (1700 < year < 1917) {



    } else {

    }


}
