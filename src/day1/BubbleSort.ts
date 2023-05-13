export default function bubble_sort(arr: number[]): void {
    let end = arr.length;
    for (; end > 0; end--) {
        for (let i = 1; i < end; i++) {
            if (arr[i-1] > arr[i]) {
                const nuts = arr[i];
                arr[i] = arr[i-1];
                arr[i-1] = nuts;
            }
        }
    }
}