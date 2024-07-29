function timeConversion(s) {
    // Write your code here

    const splitHours = s.replace(/AM|PM/, "").split(":")
    const beforeMidday = s.endsWith("PM")
    let hour = splitHours[0]
    if (splitHours[0] == 12) {
        beforeMidday ? hour = 12 : hour = "00"
        return `${hour}:${splitHours[1]}:${splitHours[2]}`
    }
    if (beforeMidday) {
        hour = (Number(splitHours[0]) + 12)
        return `${hour}:${splitHours[1]}:${splitHours[2]}`
    }
    return `${hour}:${splitHours[1]}:${splitHours[2]}`


}


const time = "04:59:59AM"
console.log(timeConversion(time))