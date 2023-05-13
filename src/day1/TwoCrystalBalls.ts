export default function two_crystal_balls(breaks: boolean[]): number {
    const squirt = Math.floor(Math.sqrt(breaks.length));
    for (let i = squirt-1; i < breaks.length; i += squirt) {
        if (breaks[i]) {
            for (let j = i - squirt; j <= i; j++) {
                if (breaks[j]) {
                    return j;
                }
            }
        }
    }
    return -1;
}