//Only show the letters without repeat


let x = "aabbccccdddxi";



function noRepeating(array) {

    checkOut: for (let indexOut = 0; indexOut < array.length; indexOut++) {
    

        checkIn: for (let indexIn = 0; indexIn < array.length; indexIn++) {

            console.log(indexIn)

            if (array[indexOut] == array[indexIn] & indexIn != indexOut) {
                console.log(console.log(array[indexIn]))
                return
            }  
        }
        return array[indexOut]
    }

}

console.log(firstNonRepeatedCharacter(x))
console.log(x.indexOf("d"))


function firstNonRepeatedCharacter(string) {
    for (var i = 0; i < string.length; i++) {
      var c = string.charAt(i);
      if (string.indexOf(c) == i && string.indexOf(c, i + 1) == -1) {
        return c;
      }
    }
    return null;
  }