"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const negocio_controller_1 = require("../controllers/negocio.controller");
const router = (0, express_1.Router)();
router.post('/crear/:id', negocio_controller_1.crearNegocio);
router.get('/', negocio_controller_1.MostrarNegocios);
router.put('/actualizar/:id', negocio_controller_1.actualizarNegocio);
router.delete('/borrar/:id', negocio_controller_1.eliminarNegocio);
router.get('/:id', negocio_controller_1.MostrarNegocioId);
exports.default = router;
//# sourceMappingURL=negocios.routes.js.map