"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const categoria_controller_1 = require("../controllers/categoria.controller");
const upload_1 = __importDefault(require("../middlewares/upload"));
const router = (0, express_1.Router)();
router.post('/crear', upload_1.default, categoria_controller_1.crearCategoria);
router.get('/', categoria_controller_1.mostrarCategorias);
router.put('/actualizar/:id', categoria_controller_1.actualizarCategoria);
router.delete('/borrar/:id', categoria_controller_1.borrarCategoria);
router.get('/:id', categoria_controller_1.mostrarCategoriaId);
exports.default = router;
//# sourceMappingURL=categorias.routes.js.map