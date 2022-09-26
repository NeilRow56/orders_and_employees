import db from '../../../lib/dbConnect'
import nc from "next-connect";
import { allOrders, newOrder, listOrders } from "../../../controllers/OrderControllers"
 
 
const handler = nc()
 
db.dbConnect()
 
handler.get(allOrders)
handler.get(listOrders)
handler.post(newOrder)
 
export default handler