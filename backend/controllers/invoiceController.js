const asyncHandler = require('express-async-handler')

//@desc Get Invoices
//@route GET /api/invoices
//@access Public
const getInvoices = asyncHandler( async (req, res) => {
  if (!req.body.text) {
    res.status(400)
    throw new Error('Please add a text field')
  }
  res.status(200).json({ message: 'Get Invoices' })
})

//@desc Set Invoices
//@route POST /api/invoice
//@access Public
const setInvoice = asyncHandler( async (req, res) => {
  res.status(200).json({ message: 'Add Invoice' })
})

//@desc Update Invoices
//@route PUT /api/invoices/:id
//@access Public
const updateInvoice = asyncHandler( async (req, res) => {
  res.status(200).json({ message: `Update Invoice ${req.params.id}` })
})

//@desc Delete Invoices
//@route DELETE /api/invoices
//@access Public
const deleteInvoice = asyncHandler( async (req, res) => {
  res.status(200).json({ message: `Delete Invoice ${req.params.id}` })
})

module.exports = {
  getInvoices,
  setInvoice,
  updateInvoice,
  deleteInvoice,
}
