//Return the student object with the highest score.

const students = [
	{ name: "Alice", score: 88 },
	{ name: "Bob", score: 95 },
	{ name: "Charlie", score: 91 },
	{ name: "Chuck", score: 98 },
	{ name: "Jan", score: 90 },
	{ name: "John", score: 5 },
	{ name: "Billy", score: 4 },
];

function highestScore(students) {
	let topStudent = students[0];
	students.map((student) => {
		if (student.score > topStudent.score) {
			topStudent = student;
		}
	});

	return topStudent;
}
// function highestScore(students) {
// 	//return student with highest score
// 	//loop through each one, if score is highest return student name
// 	let topStudent = { name: "Alice", score: 88 };

// 	for (const student of students) {
// 		if (student.score > topStudent.score) {
// 			topStudent = student;
// 		}
// 	}
// 	return topStudent;
// }

console.log(highestScore(students)); // Bob
