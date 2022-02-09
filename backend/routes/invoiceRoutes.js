const express = require('express')
const router = express.Router()
const {
  getInvoices,
  setInvoice,
  updateInvoice,
  deleteInvoice,
} = require('../controllers/invoiceController')

router.get('/', getInvoices)

router.post('/', setInvoice)

router.put('/:id', updateInvoice)

router.delete('/:id', deleteInvoice)

module.exports = router
