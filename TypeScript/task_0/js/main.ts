interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}
const student1: Student = {
    firstName: "Gina",
    lastName: "Linetti",
    age: 26,
    location: "New York",
}

const student2: Student = {
    firstName: "April",
    lastName: "Ludgate",
    age: 22,
    location: "Pawnee",
}

const studentsList = [student1, student2];

const table = document.createElement("table");

studentsList.forEach((student) => {
    const row = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = student.firstName;

    const locationCell = document.createElement("td");
    locationCell.textContent = student.location;

    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    table.appendChild(row);
});

document.body.appendChild(table);
