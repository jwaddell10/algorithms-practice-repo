function zeroStriping(matrix) {
	let rowSet = new Set();
	let colSet = new Set();

	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[i].length; j++) {
			if (matrix[i][j] === 0) {
				rowSet.add(i);
				colSet.add(j);
			}
		}
	}

	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[i].length; j++) {
			if (rowSet.has(i) || colSet.has(j)) {
				matrix[i][j] = 0;
			}
		}
	}

	return matrix;
}

console.log(
	zeroStriping([
		[1, 2, 3, 4, 5],
		[6, 0, 6, 9, 10],
		[11, 12, 13, 14, 15],
		[16, 17, 18, 19, 0],
	]),
);
