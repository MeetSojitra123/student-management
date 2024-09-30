let students = [];
const studentTableBody = document.getElementById('studentTableBody');
const studentForm = document.getElementById('studentForm');
const studentIndexInput = document.getElementById('studentIndex');

function renderStudents() {
    studentTableBody.innerHTML = '';
    students.forEach((student, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${student.name}</td>
            <td>${student.age}</td>
            <td>${student.grade}</td>
            <td>
                <button onclick="editStudent(${index})">Edit</button>
                <button onclick="deleteStudent(${index})">Delete</button>
            </td>
        `;
        studentTableBody.appendChild(row);
    });
}

function addStudent(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const grade = document.getElementById('grade').value;
    const index = studentIndexInput.value;

    if (index === '-1') {
        // Add new student
        students.push({ name, age, grade });
    } else {
        // Edit existing student
        students[index] = { name, age, grade };
    }

    resetForm();
    renderStudents();
}

function editStudent(index) {
    const student = students[index];
    document.getElementById('name').value = student.name;
    document.getElementById('age').value = student.age;
    document.getElementById('grade').value = student.grade;
    studentIndexInput.value = index;
}

function deleteStudent(index) {
    students.splice(index, 1);
    renderStudents();
}

function resetForm() {
    studentForm.reset();
    studentIndexInput.value = '-1';
}

studentForm.addEventListener('submit', addStudent);
renderStudents();
