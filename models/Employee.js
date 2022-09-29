import mongoose from 'mongoose';

const employeeSchema = new mongoose.Schema(
  {
    employee_id: {type: Number, required: true, unique: true},
    avatar: {type: String},
    first_name: {type: String},
    last_name: {type: String, required: true},
    email: {type: String, required: true, unique: true, lowercase: true},
    phone_number: {type: String, required: true},
    hire_date: {type: String, required: true},
    job_id: {type: String, required: true, default: 'Intern'},
    salary: {type: Number, required: true, min: [0, 'No Salary']},
    commision_perecent: {type: Number},
    manager_id: {type: Number},
    department_id: {type: Number},
    status: {type: String}
    
    
  },
  {
    timestamps: true,
  }
);

const Employee =
  mongoose.models.Employee || mongoose.model('Employee', employeeSchema);
export default Employee;