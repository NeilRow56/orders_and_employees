
import Employee from "../models/Employee"

 
//GET all employees
 
const allEmployees = async (req, res) => {
   try {
    const Employees = await Employee.find()
 
    res.status(200).json({
        success: true,
        Employees
    })

      
   } catch (error) {
       res.status(400).json({
           success: false,
           error: error.message
       })
   }
 
     
}
// Create new Employee = /api/Employees
 
const newEmployee = async (req, res) => {
 
   try {
       const employee = await Employee.create(req.body);
      
   res.status(200).json({
       success: true,
       employee
   })
      
   } catch (error) {
       res.status(400).json({
           success: false,
           error: error.message
       })
           
   }
}


 //GET single Employee details => api/Employees/:id

 const getSingleEmployee = async (req, res) => {
 
    try {
        const singleEmployee = await Employee.findById(req.query.id);
  
        if(!singleEmployee) {
            return res.status(404).json({
                success: false,
                error: "Employee not found with this ID"
            })
  
        }
  
        res.status(200).json({
            success: true,
            singleEmployee
        })
       
   
       
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        })
            
    }
 }
 
 //UPDATE single Employee details => api/Employees/:id

 const updateSingleEmployee = async (req, res) => {
    try {
        let singleEmployee = await Employee.findById(req.query.id);
         if(!singleEmployee) {
            return res.status(404).json({
                success: false,
                error: "Employee not found with this ID"
            })
         }
  
        singleEmployee = await Employee.findByIdAndUpdate(req.query.id, req.body, {
            new: true,
            runValidators: true
  
        })
         res.status(200).json({
            success: true,
            singleEmployee
        })
      
  
      
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        })
           
    }
 }
 
    
// DELETE images associated with Employee

 //DELETE single Employee details => api/Employees/:id

 const deleteSingleEmployee = async (req, res) => {
 
    try {
        const singleEmployee = await Employee.findById(req.query.id);
  
        if(!singleEmployee) {
            return res.status(404).json({
                success: false,
                error: "Employee not found with this ID"
            })
  
        }

        await singleEmployee.remove()
  
        res.status(200).json({
            success: true,
            message:'Employee is deleted'
        })
       
   
       
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        })
            
    }
 }
 
export {
allEmployees,
newEmployee,
getSingleEmployee,
updateSingleEmployee,
deleteSingleEmployee
}