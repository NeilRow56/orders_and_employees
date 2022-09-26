// /api/orders/:id

import nc from 'next-connect'
import db from '../../../lib/dbConnect'

import { getSingleOrder, updateSingleOrder, deleteSingleOrder } from '../../../controllers/OrderControllers'


const handler = nc()

db.dbConnect()

handler.get(getSingleOrder)

handler.put(updateSingleOrder)

handler.delete(deleteSingleOrder)



export default handler