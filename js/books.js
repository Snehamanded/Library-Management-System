const departmentSelect = document.getElementById('department');
const showBooksBtn = document.getElementById('show-books-btn');
const bookList = document.getElementById('book-list');

const books = {
	'computer-science': [
		{ title: 'Introduction to Algorithms', author: 'Thomas H. Cormen' },
		{ title: 'Operating System Concepts', author: 'Abraham Silberschatz' },
		{ title: 'Compilers: Principles, Techniques, and Tools', author: 'Alfred V. Aho' }
	],
	'mathematics': [
		{ title: 'Calculus: Early Transcendentals', author: 'James Stewart' },
		{ title: 'Linear Algebra and Its Applications', author: 'David C. Lay' },
		{ title: 'Abstract Algebra', author: 'David S. Dummit' }
	],
	'history': [
		{ title: 'A History of the World', author: 'Andrew Marr' },
		{ title: 'The Story of Civilization', author: 'Will Durant' },
		{ title: 'The Histories', author: 'Herodotus' }
	]
};

showBooksBtn.addEventListener('click', () => {
	const selectedDepartment = departmentSelect.value;
	if (selectedDepartment) {
		const booksForDepartment = books[selectedDepartment];
		bookList.innerHTML = '';
		booksForDepartment.forEach(({ title, author }) => {
			const bookListItem = document.createElement('div');
			bookListItem.innerHTML = `<strong>${title}</strong> by ${author}`;
			bookList.appendChild(bookListItem);
		});
	}
});