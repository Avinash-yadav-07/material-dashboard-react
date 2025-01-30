import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const ManageEmployee = () => {
  const [open, setOpen] = useState(false); // State for form dialog
  const [employees, setEmployees] = useState([]); // State to store employee data

  // Form input fields
  const [employeeId, setEmployeeId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [department, setDepartment] = useState("");
  const [designation, setDesignation] = useState("");
  const [joiningDate, setJoiningDate] = useState("");
  const [exitDate, setExitDate] = useState("");
  const [salary, setSalary] = useState("");
  const [benefits, setBenefits] = useState("");
  const [status, setStatus] = useState("");
  const [skills, setSkills] = useState("");
  const [managerId, setManagerId] = useState("");

  // Open the form dialog
  const handleClickOpen = () => {
    setOpen(true);
  };

  // Close the form dialog
  const handleClose = () => {
    setOpen(false);
  };

  // Handle form submission
  const handleSubmit = () => {
    const newEmployee = {
      employeeId,
      name,
      email,
      phone,
      department,
      designation,
      joiningDate,
      exitDate,
      salary,
      benefits,
      status,
      skills: skills.split(","), // Convert skills string to array
      managerId,
    };

    setEmployees([...employees, newEmployee]); // Add new employee to the list
    handleClose(); // Close the form dialog
    resetForm(); // Reset form fields
  };

  // Reset form fields
  const resetForm = () => {
    setEmployeeId("");
    setName("");
    setEmail("");
    setPhone("");
    setDepartment("");
    setDesignation("");
    setJoiningDate("");
    setExitDate("");
    setSalary("");
    setBenefits("");
    setStatus("");
    setSkills("");
    setManagerId("");
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Add Employee
      </Button>

      {/* Form Dialog */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Employee</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Employee ID"
            fullWidth
            value={employeeId}
            onChange={(e) => setEmployeeId(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Name"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Email"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Phone"
            fullWidth
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Department"
            fullWidth
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Designation"
            fullWidth
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Joining Date"
            type="date"
            fullWidth
            InputLabelProps={{ shrink: true }}
            value={joiningDate}
            onChange={(e) => setJoiningDate(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Exit Date"
            type="date"
            fullWidth
            InputLabelProps={{ shrink: true }}
            value={exitDate}
            onChange={(e) => setExitDate(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Salary"
            type="number"
            fullWidth
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Benefits"
            fullWidth
            value={benefits}
            onChange={(e) => setBenefits(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Status"
            fullWidth
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Skills (comma-separated)"
            fullWidth
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Manager ID"
            fullWidth
            value={managerId}
            onChange={(e) => setManagerId(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>

      {/* Employee Table */}
      <TableContainer component={Paper} style={{ marginTop: 20 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Employee ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Department</TableCell>
              <TableCell>Designation</TableCell>
              <TableCell>Joining Date</TableCell>
              <TableCell>Exit Date</TableCell>
              <TableCell>Salary</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employees.map((employee, index) => (
              <TableRow key={index}>
                <TableCell>{employee.employeeId}</TableCell>
                <TableCell>{employee.name}</TableCell>
                <TableCell>{employee.email}</TableCell>
                <TableCell>{employee.phone}</TableCell>
                <TableCell>{employee.department}</TableCell>
                <TableCell>{employee.designation}</TableCell>
                <TableCell>{employee.joiningDate}</TableCell>
                <TableCell>{employee.exitDate}</TableCell>
                <TableCell>{employee.salary}</TableCell>
                <TableCell>{employee.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ManageEmployee;
