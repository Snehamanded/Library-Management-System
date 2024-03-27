document.getElementById('penalty-form').addEventListener('submit', function(event) {
event.preventDefault();
const bookName = document.getElementById('book-name').value;
const studentName = document.getElementById('student-name').value;
const usn = document.getElementById('usn').value;
const penaltyAmount = document.getElementById('penalty-amount').value;
const penaltyDate = document.getElementById('penalty-date').value;
const penaltyType = document.getElementById('penalty-type').value;
console.log('Book Name:', bookName);
console.log('Student Name:',studentName);
console.log('USN:',usn);
console.log('Penalty Amount:', penaltyAmount);
console.log('Penalty Date:', penaltyDate);
console.log('Penalty Type:', penaltyType);
alert("Done!");
// Add your code here to save the penalty details in the library system
window.location.href = '../../html/student_details.html';
});