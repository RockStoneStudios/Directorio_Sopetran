"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const producto_controller_1 = require("../controllers/producto.controller");
const router = (0, express_1.Router)();
router.get('/', producto_controller_1.mostrarProductos);
router.post('/crear/:id', producto_controller_1.crearProducto);
router.put('/actualizar/:id', producto_controller_1.actualizarProducto);
router.delete('/borrar/:id', producto_controller_1.eliminarProducto);
router.get('/:id', producto_controller_1.mostrarProductoId);
exports.default = router;
//# sourceMappingURL=productos.routes.js.map