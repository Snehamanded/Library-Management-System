// script.js
const issuedBooks = [];

function issueBook() {
    const bookName = document.getElementById('bookName').value;
    const studentName = document.getElementById('studentName').value;

    if (bookName && studentName) {
        issuedBooks.push({ book: bookName, student: studentName });
        displayIssuedBooks();
    } else {
        alert('Please enter both book name and student name.');
    }
}

function displayIssuedBooks() {
    const issuedBooksContainer = document.getElementById('issuedBooks');
    issuedBooksContainer.innerHTML = '';

    issuedBooks.forEach((issue) => {
        const bookInfo = document.createElement('p');
        bookInfo.textContent = `Book: ${issue.book} | Issued to: ${issue.student}`;
        issuedBooksContainer.appendChild(bookInfo);
    });
}
