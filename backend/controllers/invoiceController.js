//@desc Get Invoices
//@route GET /api/invoices
//@access Public
const getInvoices = (req, res) => {
  res.status(200).json({ message: 'Get Invoices' })
}

//@desc Set Invoices
//@route POST /api/invoice
//@access Public
const setInvoice = (req, res) => {
  res.status(200).json({ message: 'Add Invoice' })
}


//@desc Update Invoices
//@route PUT /api/invoices/:id
//@access Public
const updateInvoice = (req, res) => {
  res.status(200).json({ message: `Update Invoice ${req.params.id}` })
}

//@desc Delete Invoices
//@route DELETE /api/invoices
//@access Public
const deleteInvoice = (req, res) => {
  res.status(200).json({ message: `Delete Invoice ${req.params.id}` })
}

module.exports = {
  getInvoices,
  setInvoice,
  updateInvoice,
  deleteInvoice,
}