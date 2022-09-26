import db from '../../../lib/dbConnect'
import nc from "next-connect";
import { allEmployees, newEmployee } from "../../../controllers/EmployeeControllers"
 
 
const handler = nc()
 
db.dbConnect()
 
handler.get(allEmployees)
handler.post(newEmployee)
 
export default handler