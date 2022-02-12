const express = require('express')
const router = express.Router()
const {
  getInvoices,
  setInvoice,
  updateInvoice,
  deleteInvoice,
} = require('../controllers/invoiceController')

const { protect } = require('../middleware/authMiddleware')

router.get('/', protect, getInvoices)

router.post('/', protect, setInvoice)

router.put('/:id', protect, updateInvoice)

router.delete('/:id', protect, deleteInvoice)

module.exports = router
