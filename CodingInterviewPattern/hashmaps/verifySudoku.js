function verify_sudoku_board(board) {
	for (let i = 0; i < 9; i++) {
		let rows = new Set();
		let cols = new Set();
		let sq = new Set();

		for (let j = 0; j < 9; j++) {
			let boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
			// console.log(boxIndex, 'box')
			if (board[i][j] === 0) continue;
			if (board[j][i] === 0) continue;

			for (let i = 0; i < 3; i++) {
				for (let j = 0; j < 3; j++) {
					if (sq.has(board[i][j])) {
						return false;
					} else sq.add(board[i][j]);
				}
			}

			if (rows.has(board[i][j])) {
				return false;
			} else rows.add(board[i][j]);

			if (cols.has(board[j][i])) {
				return false;
			} else cols.add(board[j][i]);
		}
	}
	return true;
}

// console.log(
// 	verify_sudoku_board([
// 		[5, 3, 0, 0, 7, 0, 0, 0, 0],
// 		[6, 0, 0, 1, 9, 5, 0, 0, 0],
// 		[0, 9, 8, 0, 0, 0, 0, 6, 0],
// 		[8, 0, 0, 0, 6, 0, 0, 0, 3],
// 		[4, 0, 0, 8, 0, 3, 0, 0, 1],
// 		[7, 0, 0, 0, 2, 0, 0, 0, 6],
// 		[0, 6, 0, 0, 0, 0, 2, 8, 0],
// 		[0, 0, 0, 4, 1, 9, 0, 0, 5],
// 		[0, 0, 0, 0, 8, 0, 0, 7, 9],
// 	]),
// ); //true

// console.log(
// 	verify_sudoku_board([
// 		[5, 3, 5, 0, 7, 0, 0, 0, 0], // duplicate 5 in row
// 		[6, 0, 0, 1, 9, 5, 0, 0, 0],
// 		[0, 9, 8, 0, 0, 0, 0, 6, 0],
// 		[8, 0, 0, 0, 6, 0, 0, 0, 3],
// 		[4, 0, 0, 8, 0, 3, 0, 0, 1],
// 		[7, 0, 0, 0, 2, 0, 0, 0, 6],
// 		[0, 6, 0, 0, 0, 0, 2, 8, 0],
// 		[0, 0, 0, 4, 1, 9, 0, 0, 5],
// 		[0, 0, 0, 0, 8, 0, 0, 7, 9],
// 	]),
// ); //false

// console.log(
// 	verify_sudoku_board([
// 		[5, 3, 0, 0, 7, 0, 0, 0, 0],
// 		[6, 5, 0, 1, 9, 5, 0, 0, 0], // duplicate 5 in top-left box
// 		[0, 9, 8, 0, 0, 0, 0, 6, 0],
// 		[8, 0, 0, 0, 6, 0, 0, 0, 3],
// 		[4, 0, 0, 8, 0, 3, 0, 0, 1],
// 		[7, 0, 0, 0, 2, 0, 0, 0, 6],
// 		[0, 6, 0, 0, 0, 0, 2, 8, 0],
// 		[0, 0, 0, 4, 1, 9, 0, 0, 5],
// 		[0, 0, 0, 0, 8, 0, 0, 7, 9],
// 	]),
// ); // false

console.log(
	verify_sudoku_board([
		[1, 2, 3, 0, 0, 0, 0, 0, 0],
		[4, 1, 6, 0, 0, 0, 0, 0, 0], // duplicate 1 in top-left box
		[7, 8, 9, 0, 0, 0, 0, 0, 0],

		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],

		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
	]),
); //false
