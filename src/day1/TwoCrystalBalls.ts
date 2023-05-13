export default function two_crystal_balls(breaks: boolean[]): number {
    const squirt = Math.floor(Math.sqrt(breaks.length));
    let i = squirt;
    for (; i < breaks.length; i += squirt) {
        if (breaks[i]) {
            break;
        }
    }
    i -= squirt;
    for (let j = 0; j < squirt && i < breaks.length; ++j, ++i) {
        if (breaks[i]) {
            return i;
        }
    }
    return -1;
}