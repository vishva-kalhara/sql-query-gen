const content = document.getElementById("content");

const marksArr = [
	72.52, 78.56, 75, 85, 99, 85, 72.52, 78.56, 75, 85, 99, 85, 72.52, 78.56,
]; // MARKS
const studentArr = [1, 2, 3, 4, 5, 6, 7, 8];
const subjectArr = [1, 2, 3];
const termArr = [1, 2];
const db = "exam_marks_db";
const table = "student_exam_mark_record";
// let mark;

let index = 0;

const algorithm = function () {
	studentArr.forEach((student) => {
		subjectArr.forEach((aubject) => {
			termArr.forEach((term) => {
				const result = `'STU_00${student}',${aubject},${term},${marksArr[index]}`;
				generateQuery(result, index);
				index++;
				// return result;
			});
		});
	});
};

let q = "";

const generateQuery = function (result, index) {
	// let res = algorithm();
	let newQuesry =
		"INSERT INTO `" +
		db +
		"`.`" +
		table +
		"` (`student_index_no`,`subject_subject_id`,`exam_term_term_id`,`mark`) VALUES (" +
		result +
		");";
		
	q = q + " " + newQuesry;
	if (index == marksArr.length - 1) content.innerHTML = q;
};

algorithm();
