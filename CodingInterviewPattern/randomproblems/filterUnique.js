// function unique(arr) {
//     const result = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (result.includes(arr[i])) {
//             continue;
//         } else {
//             result.push(arr[i])
//         }
//     }
//     return result;
// }

function unique(array) {
	const results = [];
	array.filter((s, i, arr) => {
		if (results.includes(arr[i])) {
			console.log(arr[i], "arr i");
		} else {
			results.push(arr[i]);
		}
	});

    console.log(results, 'results')
}

let strings = [
	"Hare",
	"Krishna",
	"Hare",
	"Krishna",
	"Krishna",
	"Krishna",
	"Hare",
	"Hare",
	":-O",
];

console.log(unique(strings));
