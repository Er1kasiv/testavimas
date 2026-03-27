const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

let employees = [
  { id: 1, name: "Alice", position: "Software Engineer", salary: 80000 },
  { id: 2, name: "Bob", position: "Product Manager", salary: 90000 },
];

app.get("/employees", (req, res) => {
  res.json(employees);
});

app.get("/employees/:id", (req, res) => {
  const employee = employees.find((e) => e.id == req.params.id);
  if (!employee) return res.status(404).json({ message: "Employee not found" });
  res.json(employee);
});

app.post("/employees", (req, res) => {
  const newEmployee = { id: employees.length + 1, ...req.body };
  employees.push(newEmployee);
  res.status(201).json(newEmployee);
});

app.put("/employees/:id", (req, res) => {
  const index = employees.findIndex((e) => e.id == req.params.id);
  if (index === -1) return res.status(404).json({ message: "Employee not found" });

  employees[index] = { ...employees[index], ...req.body };
  res.json(employees[index]);
});

app.delete("/employees/:id", (req, res) => {
  employees = employees.filter((e) => e.id != req.params.id);
  res.json({ message: "Employee deleted successfully" });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
