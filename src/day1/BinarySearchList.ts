export default function bs_list(haystack: number[], needle: number): boolean {
    let lo = 0;
    let hi = haystack.length;
    do {
        const middle = Math.floor(lo + (hi - lo) /2);
        const daddy = haystack[middle];
        if (daddy === needle){
            return true;
        }
        if (needle < daddy){
            hi = middle;
        } else {
            lo = middle + 1;
        }
    } while (lo < hi)
    return false;
}