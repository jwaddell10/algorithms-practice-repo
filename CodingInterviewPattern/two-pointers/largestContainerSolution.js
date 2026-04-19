function largestContainer(n) {
    let max = 0;

    for (let i = 0; i < n.length; i++) {
        for (let j = i + 1; j < n.length; j++) {
            let max_water = Math.min(n[i], n[j]) * (j - i)
            max = Math.max(max, max_water)
        }
    }

    return max;
}

console.log(largestContainer([2, 7, 8, 3, 7, 6])) // 24