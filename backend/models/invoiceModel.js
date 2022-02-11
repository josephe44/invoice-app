const mongoose = require('mongoose')

const invoiceSchema = mongoose.Schema({
  text: {
    type: String,
    required: [true, 'Please add a text value'],
  },
//   invoiceNumber: {
//     type: String,
//     required: [true, 'Invoice number is required'],
//     unique: true
//   },
//   invoiceDate: {
//     type: Date,
//     required: [true, 'Invoice date is required']
//   },
//   dueDate: {
//     type: Date,
//     required: [true, 'Due date is required']
//   },
//   customer: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Customer',
//     required: [true, 'Customer is required']
//   },
//   items: [
//     {
//       item: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'Item',
//         required: [true, 'Item is required']
//       },
//       quantity: {
//         type: Number,
//         required: [true, 'Quantity is required']
//       },
//       price: {
//         type: Number,
//         required: [true, 'Price is required']
//       }
//     }
//   ]
}, {
  timestamps: true
})

module.exports = mongoose.model('Invoice', invoiceSchema)