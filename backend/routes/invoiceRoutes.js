const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Get Invoices' })
})

router.post('/', (req, res) => {
  res.status(200).json({ message: 'Add Invoice' })
})

router.put('/:id', (req, res) => {
  res.status(200).json({ message: `Update Invoice ${req.params.id}` })
})

router.delete('/:id', (req, res) => {
  res.status(200).json({ message: `Delete Invoice ${req.params.id}` })
})




module.exports = router
