
import Order from "../models/Order"

 
//GET all orders
 
const allOrders = async (req, res) => {
   try {
    const orders = await Order.find()
 
    res.status(200).json({
        success: true,
        orders
    })

      
   } catch (error) {
       res.status(400).json({
           success: false,
           error: error.message
       })
   }
 
     
}
// Create new order = /api/orders
 
const newOrder = async (req, res) => {
 
   try {
       const order = await Order.create(req.body);
      
   res.status(200).json({
       success: true,
       order
   })
      
   } catch (error) {
       res.status(400).json({
           success: false,
           error: error.message
       })
           
   }
}

//GET all orders
 
const listOrders = async (req, res) => {
    try {
     const results = await Order.find()
  
     res.status(200).json({
         success: true,
         results 
         
     })
 
       
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        })
    }
  
      
 }

 //GET single order details => api/orders/:id

 const getSingleOrder = async (req, res) => {
 
    try {
        const singleOrder = await Order.findById(req.query.id);
  
        if(!singleOrder) {
            return res.status(404).json({
                success: false,
                error: "Order not found with this ID"
            })
  
        }
  
        res.status(200).json({
            success: true,
            singleOrder
        })
       
   
       
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        })
            
    }
 }
 
 //UPDATE single order details => api/orders/:id

 const updateSingleOrder = async (req, res) => {
    try {
        let singleOrder = await Order.findById(req.query.id);
         if(!singleOrder) {
            return res.status(404).json({
                success: false,
                error: "Order not found with this ID"
            })
         }
  
        singleOrder = await Order.findByIdAndUpdate(req.query.id, req.body, {
            new: true,
            runValidators: true
  
        })
         res.status(200).json({
            success: true,
            singleOrder
        })
      
  
      
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        })
           
    }
 }
 
    
// DELETE images associated with order

 //DELETE single order details => api/orders/:id

 const deleteSingleOrder = async (req, res) => {
 
    try {
        const singleOrder = await Order.findById(req.query.id);
  
        if(!singleOrder) {
            return res.status(404).json({
                success: false,
                error: "Order not found with this ID"
            })
  
        }

        await singleOrder.remove()
  
        res.status(200).json({
            success: true,
            message:'Order is deleted'
        })
       
   
       
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        })
            
    }
 }
 
export {
allOrders,
newOrder,
listOrders,
getSingleOrder,
updateSingleOrder,
deleteSingleOrder
}