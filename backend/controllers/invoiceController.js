const asyncHandler = require('express-async-handler')
const Invoice = require('../models/invoiceModel')
const User = require('../models/userModel')

//@desc Get Invoices
//@route GET /api/invoices
//@access Private
const getInvoices = asyncHandler(async (req, res) => {
  const invoices = await Invoice.find({ user: req.user.id })
  res.status(200).json(invoices)
})

//@desc Set Invoices
//@route POST /api/invoice
//@access Private
const setInvoice = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400)
    throw new Error('Please add a text field')
  }
  const invoice = await Invoice.create({
    text: req.body.text, //req.body.text is the text field in the frontend
    user: req.user.id,
  })
  res.status(200).json(invoice)
})

//@desc Update Invoices
//@route PUT /api/invoices/:id
//@access Private
const updateInvoice = asyncHandler(async (req, res) => {
  const invoice = await Invoice.findByIdAndUpdate(req.params.id)
  if (!invoice) {
    res.status(404)
    throw new Error('Invoice not found')
  }
  const user = await User.findById(req.user.id)

  // Check for User
  if(!user) {
    res.status(404)
    throw new Error('User not found')
  }
  //Make sure the logged in user is the one updating the invoice
  if(invoice.user.toString() !== user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }
  const updatedInvoice = await Invoice.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  )
  res.status(200).json(updatedInvoice)
})

//@desc Delete Invoices
//@route DELETE /api/invoices
//@access Private
const deleteInvoice = asyncHandler(async (req, res) => {
  const invoice = await Invoice.findByIdAndUpdate(req.params.id)
  if (!invoice) {
    res.status(404)
    throw new Error('Invoice not found')
  }
  const user = await User.findById(req.user.id)

  // Check for User
  if(!user) {
    res.status(404)
    throw new Error('User not found')
  }
  //Make sure the logged in user is the one updating the invoice
  if(invoice.user.toString() !== user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }
  await invoice.remove()
  res.status(200).json({ id: req.params.id })
})

module.exports = {
  getInvoices,
  setInvoice,
  updateInvoice,
  deleteInvoice,
}
