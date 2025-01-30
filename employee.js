const employees = [
    {
        empId: 101,
        empName: "John Doe",
        empCompany: "ABC Corp",
        empSalary: 55000,
        empAddress: {
            empCity: "New York",
            empArea: "Manhattan"
        }
    },
    {
        empId: 102,
        empName: "Jane Smith",
        empCompany: "XYZ Ltd.",
        empSalary: 60000,
        empAddress: {
            empCity: "Los Angeles",
            empArea: "Hollywood"
        }
    },
    {
        empId: 103,
        empName: "Mark Johnson",
        empCompany: "Tech Solutions",
        empSalary: 75000,
        empAddress: {
            empCity: "Chicago",
            empArea: "Downtown"
        }
    }
];

function populateTable() {
    const tableBody = document.querySelector("#employeeTable tbody");
    employees.forEach(employee => {
        const row = document.createElement("tr");

        // Create each cell and append it to the row
        const empIdCell = document.createElement("td");
        empIdCell.textContent = employee.empId;
        row.appendChild(empIdCell);

        const empNameCell = document.createElement("td");
        empNameCell.textContent = employee.empName;
        row.appendChild(empNameCell);

        const empCompanyCell = document.createElement("td");
        empCompanyCell.textContent = employee.empCompany;
        row.appendChild(empCompanyCell);

        const empSalaryCell = document.createElement("td");
        empSalaryCell.textContent = `$${employee.empSalary}`;
        row.appendChild(empSalaryCell);

        const empCityCell = document.createElement("td");
        empCityCell.textContent = employee.empAddress.empCity;
        row.appendChild(empCityCell);

        const empAreaCell = document.createElement("td");
        empAreaCell.textContent = employee.empAddress.empArea;
        row.appendChild(empAreaCell);

        // Append the row to the table body
        tableBody.appendChild(row);
    });
}

// Call the function to populate the table
populateTable();
