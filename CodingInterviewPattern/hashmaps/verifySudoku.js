function verify_sudoku_board(board) {
	for (let i = 0; i < 9; i++) {
		let row = new Set();
		let col = new Set();
		let box = new Set();

		for (let j = 0; j < 9; j++) {
			let _row = board[i][j];
			let _col = board[j][i];
			let _box =
				board[3 * Math.floor(i / 3) + Math.floor(j / 3)][
					3 * (i % 3) + (j % 3)
				];

			if (_row !== 0) {
				if (row.has(_row)) {
					return false;
				}
				row.add(_row);
			}

			if (_col !== 0) {
				if (col.has(_col)) {
					return false;
				}
				col.add(_col);
			}

			if (_box !== 0) {
				if (box.has(_box)) {
					return false;
				}
				box.add(_box);
			}
		}
	}
	return true;
}

console.log(
	verify_sudoku_board([
		[5, 3, 0, 0, 7, 0, 0, 0, 0],
		[6, 0, 0, 1, 9, 5, 0, 0, 0],
		[0, 9, 8, 0, 0, 0, 0, 6, 0],
		[8, 0, 0, 0, 6, 0, 0, 0, 3],
		[4, 0, 0, 8, 0, 3, 0, 0, 1],
		[7, 0, 0, 0, 2, 0, 0, 0, 6],
		[0, 6, 0, 0, 0, 0, 2, 8, 0],
		[0, 0, 0, 4, 1, 9, 0, 0, 5],
		[0, 0, 0, 0, 8, 0, 0, 7, 9],
	]),
); //true

console.log(
	verify_sudoku_board([
		[5, 3, 5, 0, 7, 0, 0, 0, 0], // duplicate 5 in row
		[6, 0, 0, 1, 9, 5, 0, 0, 0],
		[0, 9, 8, 0, 0, 0, 0, 6, 0],
		[8, 0, 0, 0, 6, 0, 0, 0, 3],
		[4, 0, 0, 8, 0, 3, 0, 0, 1],
		[7, 0, 0, 0, 2, 0, 0, 0, 6],
		[0, 6, 0, 0, 0, 0, 2, 8, 0],
		[0, 0, 0, 4, 1, 9, 0, 0, 5],
		[0, 0, 0, 0, 8, 0, 0, 7, 9],
	]),
); //false

console.log(
	verify_sudoku_board([
		[5, 3, 0, 0, 7, 0, 0, 0, 0],
		[6, 5, 0, 1, 9, 0, 0, 0, 0], // duplicate 5 in top-left box
		[0, 9, 8, 0, 0, 0, 0, 6, 0],
		[8, 0, 0, 0, 6, 0, 0, 0, 3],
		[4, 0, 0, 8, 0, 3, 0, 0, 1],
		[7, 0, 0, 0, 2, 0, 0, 0, 6],
		[0, 6, 0, 0, 0, 0, 2, 8, 0],
		[0, 0, 0, 4, 1, 9, 0, 0, 5],
		[0, 0, 0, 0, 8, 0, 0, 7, 9],
	]),
); // false

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
