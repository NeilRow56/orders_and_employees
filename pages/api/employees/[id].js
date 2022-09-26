// /api/employees/:id

import nc from 'next-connect'
import db from '../../../lib/dbConnect'

import { getSingleEmployee, updateSingleEmployee, deleteSingleEmployee } from '../../../controllers/EmployeeControllers'


const handler = nc()

db.dbConnect()

handler.get(getSingleEmployee)

handler.put(updateSingleEmployee)

handler.delete(deleteSingleEmployee)



export default handler