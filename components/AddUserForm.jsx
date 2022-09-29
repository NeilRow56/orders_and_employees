import { useReducer } from "react"
import { BiPlus } from 'react-icons/bi'
import Success from './Success'
import Bug from './Bug'

 



export default function AddUserForm({formData, setFormData}){
    
   

    

    const handleSubmit = (e) => {
        e.preventDefault();
        if(Object.keys(formData).length == 0) return console.log("Don't have Form Data");
       
       

        

       
    }

    if(Object.keys(formData).length > 0) return <Bug message={"Added Successfully"}></Bug>

    

    return (
        <form className="grid lg:grid-cols-4 w-full gap-4 " onSubmit={handleSubmit}>
            <div className="input-type">
                <input type="text"  onChange={setFormData} name="employee_id" className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="ID" />
            </div>
            <div className="input-type">
                <input type="text"  onChange={setFormData} name="firstname" className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="FirstName" />
            </div>
            <div className="input-type">
                <input type="text"  onChange={setFormData} name="lastname" className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="LastName" />
            </div>
            <div className="input-type">
                <input type="date"  onChange={setFormData} name="hire_date" className="border px-5 py-3 focus:outline-none rounded-md w-full" placeholder="Commencement Date" />
            </div>
            <div className="input-type">
                <input type="text" onChange={setFormData}  name="email" className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="Email" />
            </div>
            <div className="input-type">
                <input type="text"  onChange={setFormData} name="phone_number" className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="Phone" />
            </div>
            <div className="input-type">
                <input type="number"  onChange={setFormData} name="job_id" className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="Job ID" />
            </div>
            
            
            <div className="input-type">
                <input type="text"  onChange={setFormData} name="salary" className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="Salary" />
            </div>
            <div className="input-type">
                <input type="number"  onChange={setFormData} name="commission_percent" className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="Commission %" />
            </div>
            <div className="input-type">
                <input type="number"  onChange={setFormData} name="department_id" className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="Department ID" />
            </div>
            <div className="input-type">
                <input type="number"  onChange={setFormData} name="manager_id" className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="Manager ID" />
            </div>
            
            


            <div className="flex gap-10 items-center">
                <div className="form-check">
                    <input type="radio" onChange={setFormData} value="Active" id="radioDefault1" name="status" className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300  bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" />
                    <label htmlFor="radioDefault1" className="inline-block tet-gray-800">
                        Active
                    </label>
                </div>
                <div className="form-check">
                    <input type="radio" onChange={setFormData}  value="Inactive" id="radioDefault2" name="status" className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300  bg-white checked:bg-red-500 checked:border-red-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" />
                    <label htmlFor="radioDefault2" className="inline-block tet-gray-800">
                        Inactive
                    </label>
                </div>
            </div>

            <button className="flex justify-center text-md w-2/6 bg-green-500 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-green-500 hover:text-green-500">
             Add <span className="px-1"><BiPlus size={24}></BiPlus></span>
            </button>

           </form> 
    )
}