document.getElementById("fullTimeForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("fullName").value;
    const salary = parseFloat(document.getElementById("fullSalary").value);

    const fullTimeEmployee = { name, annualSalary: salary };

    fetch("http://localhost:3000/api/employees/fulltime", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(fullTimeEmployee),
    })
    .then((response) => response.json())
    .then((data) => {
        alert("Full-time employee added successfully!");
    })
    .catch((error) => {
        console.error("Error:", error);
        alert("Failed to add employee.");
    });
});

document.getElementById("partTimeForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("partName").value;
    const hourlyRate = parseFloat(document.getElementById("hourlyRate").value);
    const hoursWorked = parseFloat(document.getElementById("hoursWorked").value);

    const partTimeEmployee = { name, hourlyRate, hoursWorked };

    fetch("http://localhost:3000/api/employees/parttime", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(partTimeEmployee),
    })
    .then((response) => response.json())
    .then((data) => {
        alert("Part-time employee added successfully!");
    })
    .catch((error) => {
        console.error("Error:", error);
        alert("Failed to add employee.");
    });
});