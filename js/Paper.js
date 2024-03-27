const papers = [
    { department: 'cs', year: 2017, link: 'https://your-link-to-2017-cs-question-paper.pdf' },
    { department: 'cs', year: 2018, link: 'question-papers/2018-cs.pdf' },
    { department: 'cs', year: 2019, link: 'question-papers/2019-cs.pdf' },
    { department: 'ee', year: 2017, link: 'question-papers/2017-ee.pdf' },
    { department: 'ee', year: 2018, link: 'question-papers/2018-ee.pdf' },
    { department: 'ee', year: 2019, link: 'question-papers/2019-ee.pdf' },
    { department: 'me', year: 2017, link: 'question-papers/2017-me.pdf' },
    { department: 'me', year: 2018, link: 'question-papers/2018-me.pdf' },
    { department: 'me', year: 2019, link: 'question-papers/2019-me.pdf' },
    { department: 'ec', year: 2017, link: 'question-papers/2017-ec.pdf' },
    { department: 'ec', year: 2018, link: 'question-papers/2018-ec.pdf' },
    { department: 'ec', year: 2019, link: 'question-papers/2019-ec.pdf' },
];

function updatePaperList() {
    const selectedDepartment = departmentSelect.value;
    const filteredPapers = papers.filter(paper => selectedDepartment === 'all' || paper.department === selectedDepartment);

    paperList.innerHTML = '';

    filteredPapers.forEach(paper => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = paper.link;
        link.textContent = `Question Paper ${paper.year} - ${paper.department.toUpperCase()}`;
        listItem.appendChild(link);
        paperList.appendChild(listItem);
    });
}

const departmentSelect = document.getElementById('department');
const paperList = document.getElementById('paper-list');

departmentSelect.addEventListener('change', updatePaperList);
updatePaperList(); // Call the function initially to display the papers for the default department ('all')
