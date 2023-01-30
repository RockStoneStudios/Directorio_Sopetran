"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.borrarCategoria = exports.actualizarCategoria = exports.mostrarCategoriaId = exports.mostrarCategorias = exports.crearCategoria = void 0;
const Categoria_1 = __importDefault(require("../models/Categoria"));
const crearCategoria = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { nombre, imagen } = req.body;
        if (nombre.length < 2)
            return res.status(400).json({ message: 'Ingrese Nombre Valido' });
        if (imagen.length < 3)
            return res.status(400).json({ message: 'Ingrese Imagen Valida' });
        console.log(imagen);
        const nueva_categoria = {
            nombre,
            imagen
        };
        const categoria = new Categoria_1.default(nueva_categoria);
        yield categoria.save();
        return res.status(200).json(categoria);
    }
    catch (error) {
        return res.status(500).json(error);
    }
});
exports.crearCategoria = crearCategoria;
const mostrarCategorias = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const categorias = yield Categoria_1.default.find({});
        return res.status(200).json(categorias);
    }
    catch (error) {
        return res.status(500).json(error);
    }
});
exports.mostrarCategorias = mostrarCategorias;
const mostrarCategoriaId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        const categoria = yield Categoria_1.default.findById(id).populate('negocios');
        if (!categoria)
            return res.status(404).json({ message: "No se encuentra categoria por este Id" });
        return res.status(200).json(categoria);
    }
    catch (error) {
        return res.status(500).json(error);
    }
});
exports.mostrarCategoriaId = mostrarCategoriaId;
const actualizarCategoria = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { nombre, imagen } = req.body;
        const id = req.params.id;
        const categoriaActualizada = yield Categoria_1.default.findOneAndUpdate({ _id: id }, req.body, { new: true });
        return res.status(200).json(categoriaActualizada);
    }
    catch (error) {
        return res.status(500).json(error);
    }
});
exports.actualizarCategoria = actualizarCategoria;
const borrarCategoria = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const borrarCategoria = yield Categoria_1.default.findByIdAndDelete(req.params.id);
        if (!borrarCategoria)
            return res.status(404).json({ message: "No hay Categoria por este Id" });
        return res.status(200).json(borrarCategoria);
    }
    catch (error) {
        return res.status(500).json(error);
    }
});
exports.borrarCategoria = borrarCategoria;
//# sourceMappingURL=categoria.controller.js.map