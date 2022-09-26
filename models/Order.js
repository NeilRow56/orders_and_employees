import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema(
  {
    id: {type: Number, required: true},
    item: { type: String, required: true },
    ordering_date: { type: String},
    order_customer: { type: Number},
    order_status: {type: String}
    
    
  },
  {
    timestamps: true,
  }
);

const Order =
  mongoose.models.Order || mongoose.model('Order', orderSchema);
export default Order;