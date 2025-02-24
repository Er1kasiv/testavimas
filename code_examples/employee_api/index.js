const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// In-Memory Employee Data
let employees = [];
let idCounter = 1;

// Create Employee
// http://localhost:3000/employees
app.post("/employees", (req, res) => {
    const { name, position, department, salary } = req.body;
    if (!name || !position || !department || salary == null) {
        return res.status(400).json({ error: "All fields are required" });
    }
    const newEmployee = { id: idCounter++, name, position, department, salary };
    employees.push(newEmployee);
    res.status(201).json(newEmployee);
});

// Get All Employees
// http://localhost:3000/employees
app.get("/employees", (req, res) => {
    res.json(employees);
});

// Get Employee by ID
// http://localhost:3000/employees/1
app.get("/employees/:id", (req, res) => {
    const employee = employees.find(emp => emp.id === parseInt(req.params.id));
    if (!employee) return res.status(404).json({ error: "Employee not found" });
    res.json(employee);
});

// Update Employee
app.put("/employees/:id", (req, res) => {
    const employee = employees.find(emp => emp.id === parseInt(req.params.id));
    if (!employee) return res.status(404).json({ error: "Employee not found" });

    const { name, position, department, salary } = req.body;
    employee.name = name || employee.name;
    employee.position = position || employee.position;
    employee.department = department || employee.department;
    employee.salary = salary != null ? salary : employee.salary;

    res.json(employee);
});

// Delete Employee
app.delete("/employees/:id", (req, res) => {
    const index = employees.findIndex(emp => emp.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).json({ error: "Employee not found" });

    employees.splice(index, 1);
    res.json({ message: "Employee deleted successfully" });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
