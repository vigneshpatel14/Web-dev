const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json()); 
let students = [];

app.post("/students", (req, res) => {
  const student = req.body;
  students.push(student);
  res.status(201).json({ message: "Student created", student });
  console.log(students);
});

app.get("/students", (req, res) => {
  res.status(200).json(students);
  console.log(students);
});

app.get("/students/:id", (req, res) => {
  const id = req.params.id;
  const student = students.find((s) => s.id === id);
  if (student) {
    res.status(200).json(student);
    console.log(student);
  } else {
    res.status(404).json({ message: "Student not found" });
    console.log("Student not found");
  }
});

app.put("/students/:id", (req, res) => {
  const id = req.params.id;
  const index = students.findIndex((s) => s.id === id);
  if (index !== -1) {
    students[index] = { ...students[index], ...req.body };
    res
      .status(200)
      .json({ message: "Student updated", student: students[index] });
  } else {
    res.status(404).json({ message: "Student not found" });
  }
});

app.delete("/students/:id", (req, res) => {
  const { id } = req.params;
  const index = students.findIndex((s) => s.id === id);
  if (index !== -1) {
    students.splice(index, 1);
    res.status(204).send(); 
  } else {
    res.status(404).json({ message: "Student not found" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});