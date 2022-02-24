const express = require('express')
const router = express.Router()

module.exports = () => {
  router.get('/clientes', clientesController.selectClientes)
  router.post('clientes', clientesController.createCliente)
  return router
}
