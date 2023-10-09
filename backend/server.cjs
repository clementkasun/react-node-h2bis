const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors"); // Import the CORS middleware

const app = express();

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// Enable CORS for all routes, allowing requests from any origin
app.use(cors());

// Create a connection to the database
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "react_h2bis_sample",
});

// Connect to the database
con.connect((err) => {
  if (err) throw err;
  console.log("Connected to the database");
});

// Define a route to handle POST requests for updating employees by ID
app.post("/api/update-data/:id", (req, res) => {
  // Extract data from the request body
  const {
    customer_type,
    reff_no,
    title,
    company_name,
    cust_name,
    identity_number,
    open_balance,
    sales_person,
    posting_address,
    billing_address,
    location1,
    location2,
  } = req.body;

  // Extract the 'id' parameter from the URL
  const id = req.params.id; // Access 'id' from URL parameter

  // SQL statement to update an employee by 'id'
  const sql = `
    UPDATE employees
    SET
      customer_type = ?,
      Refference_number = ?,
      title = ?,
      company_name = ?,
      customer_name = ?,
      identity_number = ?,
      opening_balance = ?,
      sales_person = ?,
      posting_address = ?,
      billing_address = ?,
      location_1 = ?,
      location_2 = ?
    WHERE
      employee_id = ?
  `;

  const values = [
    customer_type,
    reff_no,
    title,
    company_name,
    cust_name,
    identity_number,
    open_balance,
    sales_person,
    posting_address,
    billing_address,
    location1,
    location2,
    id, // 'id' as the last parameter
  ];

  // Execute the SQL statement
  con.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error updating employee:", err);
      return res.status(500).json({ error: "Error updating employee" });
    }
    console.log("Employee updated:", result);
    return res.status(200).json({ message: "Employee updated successfully" });
  });
});

// Start the Express.js server
const port = 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
