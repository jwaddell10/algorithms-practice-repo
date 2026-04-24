// export function verify_sudoku_board(board) {
// 	for (let i = 0; i < 9; i++) {
// 		let row = new Set();
// 		for (let j = 0; j < 9; j++) {
// 			if (board[i][j] === 0) continue;
// 			if (row.has(board[i][j])) {
// 				return false;
// 			}
// 			row.add(board[i][j]);
// 		}
// 	}

// 	for (let i = 0; i < 9; i++) {
// 		let col = new Set();

// 		for (let j = 0; j < 9; j++) {
// 			if (board[j][i] === 0) continue;
// 			if (col.has(board[j][i])) {
// 				return false;
// 			}
// 			col.add(board[j][i]);
// 		}
// 	}

// 	for (let boxRow = 0; boxRow < 3; i++) {
// 		for (let boxCol = 0; boxCol < 3; j++) {
// 			let seen = new Set();

// 			for (let i = 0; i < 3; i++) {
// 				for (let j = 0; j < 3; j++) {
// 					if (board[i][j] === 0) continue;
// 					if (seen.has(board[boxRow * 3 + i][boxCol * 3 + i]))
// 						return false;

// 					seen.add(board[boxRow * 3 + i][boxCol * 3 + i]);
// 				}
// 			}
// 		}
// 	}
// 	return true;
// }

function verify_sudoku_board(board) {
	let rows = Array.from({ length: 9 }, () => new Set());
	let cols = Array.from({ length: 9 }, () => new Set());
	let boxes = Array.from({ length: 9 }, () => new Set());

	for (let r = 0; r < 9; r++) {
		for (let c = 0; c < 9; c++) {
			if (board[r][c] === 0) continue;

			let value = board[r][c];
			// boxes.add(board[Math.floor(r / 3)][Math.floor(c / 3)])
			let boxIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3)
			// console.log(boxIndex, 'box index')
			// console.log(boxIndex, 'box index', correctBoxIndex, 'correct Box index')
			
			if (rows[r].has(value) || cols[c].has(value) || boxes[boxIndex].has(value)) {
				return false;
			}

			rows[r].add(value);
			cols[c].add(value);
			boxes[boxIndex].add(value)
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
