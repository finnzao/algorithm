export default function two_crystal_balls(breaks: boolean[]): number {
    const jmppAmount = Math.floor(Math.sqrt(breaks.length))

    let i = jmppAmount;

    for (; i < breaks.length; i += jmppAmount) {
        if (breaks[i]) {
            break;
        }
    }

    i -= jmppAmount;

    for (let j = 0; j < jmppAmount && i < breaks.length; i++) {
        if(breaks[i]){
            return i;
        }
    }

    return -1;
}