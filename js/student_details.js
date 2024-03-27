const studentList = [
    { name: 'Sneha', usn: '149', email: 'sneha@gmail.com', phone: '9876426387', bookIssued: 'Computer Science',penalty:'20'},
    { name: 'Supriya', usn: '162', email: 'supriya@gmail.com', phone: '9876543210', bookIssued: 'Mathematics',penalty:'50' }
  ];
  
  // Add existing students to the table
  const table = document.getElementById('studentTable');
  const tbody = table.querySelector('tbody');
  studentList.forEach(student => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${student.name}</td>
      <td>${student.usn}</td>
      <td>${student.email}</td>
      <td>${student.phone}</td>
      <td>${student.bookIssued}</td>
      <td>${student.penalty}</td>
      <td>
        <button class="modifyStudent">Modify</button>
      </td>
    `;
    tbody.appendChild(row);
  });
  
  // Add event listener to the search bar
  const search = document.getElementById('search');
  search.addEventListener('input', () => {
    const term = search.value.toLowerCase();
    const rows = tbody.querySelectorAll('tr');
    rows.forEach(row => {
      const nameCell = row.querySelector('td:nth-child(1)');
      const name = nameCell.textContent.toLowerCase();
      if (name.includes(term)) {
        row.style.display = '';
      } else {
        row.style.display = 'none';
      }
    });
  });
  
  // // Add event listener to the add student button
  const addStudent = document.getElementById('addStudent');
  addStudent.addEventListener('click', () => {
    const name = prompt('Enter the student name:');
    const studentId = prompt('Enter the student ID:');
    const email = prompt('Enter the student email:');
    const phone = prompt('Enter the student phone number:');
    const bookIssued = prompt('Enter the student bookIssued:');
    const newStudent = { name, studentId, email, phone, bookIssued };
    studentList.push(newStudent);
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${newStudent.name}</td>
      <td>${newStudent.studentId}</td>
      <td>${newStudent.email}</td>
      <td>${newStudent.phone}</td>
      <td>${newStudent.bookIssued}</td>
      <td>${newStudent.penalty}</td>
      <td>
        <button class="modifyStudent">Modify</button>
      </td>
    `;
    tbody.appendChild(row);
  });
  // Add event listener to the remove student button
const removeStudent = document.getElementById('removeStudent');
removeStudent.addEventListener('click', () => {
  const term = prompt('Enter the student name to remove:');
  const rows = tbody.querySelectorAll('tr');
  let removed = false;
  rows.forEach((row, index) => {
    const nameCell = row.querySelector('td:nth-child(1)');
    const name = nameCell.textContent.toLowerCase();
    if (name.includes(term)) {
      studentList.splice(index, 1);
      row.remove();
      removed = true;
    }
  });
  if (!removed) {
    alert('No student found with that name.');
  }
});
  
  // // Add event listener to the modify student button
  const modifyButtons = document.querySelectorAll('.modifyStudent');
  modifyButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      const name = prompt('Enter the new student name:');
      const studentId = prompt('Enter the new student ID:');
      const email = prompt('Enter the new student email:');
      const phone = prompt('Enter the new student phone number:');
      const bookIssued = prompt('Enter the new student bookIssued:');
      const penalty = prompt('Enter the new student penalty:');
      //const action = prompt('Enter the new student action:');
      studentList[index] = { name, studentId, email, phone, bookIssued,penalty};
      const row = tbody.querySelector(`tr:nth-child(${index + 2})`);
      row.querySelector('td:nth-child(1)').textContent = studentList[index].name;
      row.querySelector('td:nth-child(2)').textContent = studentList[index].studentId;
      row.querySelector('td:nth-child(3)').textContent = studentList[index].email;
      row.querySelector('td:nth-child(4)').textContent = studentList[index].phone;
      row.querySelector('td:nth-child(5)').textContent = studentList[index].bookIssued;
      row.querySelector('td:nth-child(5)').textContent = studentList[index].penalty;

    });
 });
  
  // Add event listener to the remove student button
  // const removeStudent = document.getElementById('removeStudent');
  // removeStudent