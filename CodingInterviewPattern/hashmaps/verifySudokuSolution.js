export function verify_sudoku_board(board) {
	for (let i = 0; i < 9; i++) {
		let row = new Set(),
			col = new Set(),
			box = new Set();

		for (let j = 0; j < 9; j++) {
			let _row = board[i][j];
			let _col = board[j][i];
			let _box =
				board[3 * Math.floor(i / 3) + Math.floor(j / 3)][
					3 * (i % 3) + (j % 3)
				];

			if (_row != ".") {
				if (row.has(_row)) return false;
				row.add(_row);
			}
			if (_col != ".") {
				if (col.has(_col)) return false;
				col.add(_col);
			}

			if (_box != ".") {
				if (box.has(_box)) return false;
				box.add(_box);
			}
		}
	}
	return true;
}

// function verify_sudoku_board(board) {
// 	let rows = Array.from({ length: 9 }, () => new Set());
// 	let cols = Array.from({ length: 9 }, () => new Set());
// 	let boxes = Array.from({ length: 9 }, () => new Set());

// 	for (let r = 0; r < 9; r++) {
// 		for (let c = 0; c < 9; c++) {
// 			if (board[r][c] === 0) continue;

// 			let value = board[r][c];
// 			// boxes.add(board[Math.floor(r / 3)][Math.floor(c / 3)])
// 			let boxIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3);
// 			// console.log(boxIndex, 'box index')
// 			// console.log(boxIndex, 'box index', correctBoxIndex, 'correct Box index')

// 			if (
// 				rows[r].has(value) ||
// 				cols[c].has(value) ||
// 				boxes[boxIndex].has(value)
// 			) {
// 				return false;
// 			}

// 			rows[r].add(value);
// 			cols[c].add(value);
// 			boxes[boxIndex].add(value);
// 		}
// 	}
// 	return true;
// }

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

console.log(
	verify_sudoku_board([
		[5, 3, 0, 0, 7, 0, 0, 0, 0],
		[6, 5, 0, 1, 9, 5, 0, 0, 0], // duplicate 5 in top-left box
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
