const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
app.use(cors({ origin: 'http://localhost:4200' }));
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'pavan',
  database: 'Crud_Opeartion'
});

db.connect(err => {
  if (err) throw err;
  console.log('MySQL connected...');
});

// Fetch all employees
app.get('/api/employees', (req, res) => {
  db.query('SELECT * FROM employee', (err, results) => {
    if (err) return res.status(500).send({ error: 'Fetch failed' });
    res.send(results);
  });
});

// Add a new employee
app.post('/api/employees', (req, res) => {
  const { name, email, contactNo, city, state, pinCode, address } = req.body;
  const sql = 'INSERT INTO employee (name, email, contactNo, city, state, pinCode, address) VALUES (?, ?, ?, ?, ?, ?, ?)';
  db.query(sql, [name, email, contactNo, city, state, pinCode, address], (err, result) => {
    if (err) return res.status(500).send({ error: 'Insert failed' });
    res.send({ message: 'Employee added', id: result.insertId });
  });
});

// Update an existing employee
app.put('/api/employees/:id', (req, res) => {
  const { id } = req.params;
  const { name, email, contactNo, city, state, pinCode, address } = req.body;
  const sql = 'UPDATE employee SET name = ?, email = ?, contactNo = ?, city = ?, state = ?, pinCode = ?, address = ? WHERE id = ?';
  db.query(sql, [name, email, contactNo, city, state, pinCode, address, id], (err) => {
    if (err) return res.status(500).send({ error: 'Update failed' });
    res.send({ message: 'Employee updated' });
  });
});

// Delete an employee
app.delete('/api/employees/:id', (req, res) => {
  db.query('DELETE FROM employee WHERE id = ?', [req.params.id], (err) => {
    if (err) return res.status(500).send({ error: 'Delete failed' });
    res.send({ message: 'Employee deleted' });
  });
});

app.listen(3000, () => console.log('Server running on port 3000'));
