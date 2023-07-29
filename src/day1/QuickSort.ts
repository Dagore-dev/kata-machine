export default function quick_sort(arr: number[]): void {
    qs(arr, 0, arr.length - 1);
}

function qs(arr: number[], low: number, high: number): void {
    if (low >= high) {
        return;
    }

    const pivotIdx = partition(arr, low, high);
    qs(arr, low, pivotIdx - 1);
    qs(arr, pivotIdx + 1, high);
}

function partition(arr: number[], low: number, high: number): number {
    const pivot = arr[high];
    // Index of the position previous to the current window.
    let idx = low - 1;
    let temp;

    // 1. Starting on the beginning of the current window, check every item
    //    until the element before the pivot.
    // 2. If the current element is lower than or equal to the pivot updates idx
    //    and swap positions, so the moved element is shifted to the beginning
    //    of the current window.
    for (let i = low; i < high; i++) {
        if (arr[i] <= pivot) {
            idx++;
            temp = arr[i];
            arr[i] = arr[idx];
            arr[idx] = temp;
        }
    }

    // Do the same stuff you did on the loop but this time for the pivot.
    idx++;
    arr[high] = arr[idx];
    arr[idx] = pivot;

    return idx;
}
