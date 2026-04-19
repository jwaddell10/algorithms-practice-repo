function pairSum(n, target) {
    let map = new Map()
    for (let i = 0; i < n.length; i++) {
        let sum = target - n[i];
        if (map.has(sum)) {
            return [map.get(sum), i]
        } map.set(n[i], i)
    }
    return []
}

console.log(pairSum([-1, 3, 4, 2], 3)) // [0, 2]
console.log(pairSum([1, 2, 3, 4], 8)) // []