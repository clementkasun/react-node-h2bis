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
  const mainFormData = req.body.mainFormData; // This will contain the main form data
  const tableData = req.body.tableData;
  // Extract the 'id' parameter from the URL
  const id = req.params.id; // Access 'id' from URL parameter
  update_employees(res, mainFormData, tableData, id);
  // return res.status(200).json({ message: "Employee updated successfully" });
});

// Start the Express.js server
const port = 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

function update_employees(res, mainFormData, tableData, employee_id) {
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
  } = mainFormData;

  // SQL statement to update an employee by 'id'
  const sql =
    "UPDATE `react_h2bis_sample`.`employees` SET `customer_type`=?, `reff_no`=?, `title`= ?, `company_name`= ?, `cust_name`= ?, `identity_number`= ?, `open_balance`= ?, `sales_person`= ?, `posting_address`= ?, `billing_address`= ?, `location1`= ?, `location2`= ? WHERE  `employee_id`= ?";

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
    employee_id,
  ];

  // Execute the SQL statement
  con.query(sql, values, (err, result) => {
    if (err) {
      // Handle the error
      return res.status(500).json({ error: "Error updating employee" });
    }
    if (result.affectedRows === 0) {
      // No rows were updated, so the employee with 'id' was not found
      return res.status(404).json({ message: "Employee not found" });
    }
  });

  updateTableRecords(res, tableData, employee_id);
}

function updateTableRecords(res, tableData, employee_id) {
  tableData.forEach((element) => {
    const { name, designation, mobile_no, email, address } = element;
    const values = [employee_id, name, designation, mobile_no, email, address];

    const sql = `
INSERT INTO extra_employee_details (employee_id, name, designation, mobile, email, address)
VALUES (?, ?, ?, ?, ?, ?)`;

    con.query(sql, values, (err, result) => {
      if (err) {
        console.error("Error executing SQL:", err);
        return res.status(500).json({ error: "Error updating employee" });
      }
    });
  });
}
