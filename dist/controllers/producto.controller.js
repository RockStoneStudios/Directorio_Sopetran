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
exports.eliminarProducto = exports.actualizarProducto = exports.mostrarProductoId = exports.crearProducto = exports.mostrarProductos = void 0;
const Producto_1 = __importDefault(require("../models/Producto"));
const Negocio_1 = __importDefault(require("../models/Negocio"));
const mostrarProductos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productos = yield Producto_1.default.find({});
        return res.status(200).json(productos);
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.mostrarProductos = mostrarProductos;
const crearProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const { nombre, imagen, precio } = req.body;
        const id = req.params.id;
        if (nombre.length < 3)
            return res.status(400).json({ message: 'Ingresa Nombre del producto' });
        if (imagen.length < 5)
            return res.status(400).json({ message: 'Ingresa Imagen' });
        if (precio < 200)
            return res.status(400).json({ message: 'Ingresa Precio Valido' });
        const negocio = yield Negocio_1.default.findById(id);
        const producto_nuevo = {
            nombre,
            imagen,
            precio
        };
        const nuevo_producto = new Producto_1.default(producto_nuevo);
        (_a = negocio === null || negocio === void 0 ? void 0 : negocio.productos) === null || _a === void 0 ? void 0 : _a.push(nuevo_producto.id);
        nuevo_producto.negocio = negocio === null || negocio === void 0 ? void 0 : negocio.id;
        yield (negocio === null || negocio === void 0 ? void 0 : negocio.save());
        yield nuevo_producto.save();
    }
    catch (error) {
        return res.status(500).json(error);
    }
});
exports.crearProducto = crearProducto;
const mostrarProductoId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const producto = yield Producto_1.default.findById(req.params.id);
        if (!producto)
            return res.status(404).json({ message: "No se encontro producto con este Id" });
        return res.status(200).json(producto);
    }
    catch (error) {
        return res.status(500).json(error);
    }
});
exports.mostrarProductoId = mostrarProductoId;
const actualizarProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const producto = yield Producto_1.default.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
        if (!producto)
            return res.status(404).json({ message: "No se encontro producto con este Id" });
        return res.status(200).json(producto);
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.actualizarProducto = actualizarProducto;
const eliminarProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const producto = yield Producto_1.default.findOneAndDelete({ _id: req.params.id });
        if (!producto)
            return res.status(404).json({ messsage: "No se encontro producto con este Id" });
        return res.status(200).json(producto);
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.eliminarProducto = eliminarProducto;
//# sourceMappingURL=producto.controller.js.map