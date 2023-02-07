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
exports.eliminarNegocio = exports.actualizarNegocio = exports.MostrarNegocioId = exports.MostrarNegocios = exports.crearNegocio = void 0;
const Negocio_1 = __importDefault(require("../models/Negocio"));
const Categoria_1 = __importDefault(require("../models/Categoria"));
const crearNegocio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const id = req.params.id;
    const { nombre, imagen, rating, direccion, num_domicilios, tiempo_entrega, oferta, abierto } = req.body;
    try {
        const negocio = yield Negocio_1.default.findOne({ nombre });
        if (negocio)
            return res.status(400).json({ message: "Ya hay un Negocio registrado con este Nombre" });
        if (nombre.length < 3)
            return res.status(400).json({ message: 'Ingresa Nombre' });
        if (imagen.length < 3)
            return res.status(400).json({ message: 'Ingresa Imagen' });
        if (direccion.length < 4)
            return res.status(400).json({ message: "Ingresa Direccion" });
        const categoria = yield Categoria_1.default.findById(id);
        if (!categoria)
            return res.status(404).json({ message: 'No se encuentra categoria con este Id' });
        const negocio_nuevo = {
            nombre,
            imagen,
            rating,
            direccion,
            num_domicilios,
            tiempo_entrega,
            oferta,
            abierto
        };
        const nuevo_negocio = new Negocio_1.default(negocio_nuevo);
        nuevo_negocio.categoria = categoria.id;
        yield nuevo_negocio.save();
        (_a = categoria.negocios) === null || _a === void 0 ? void 0 : _a.push(nuevo_negocio.id);
        yield categoria.save();
        return res.status(200).json(nuevo_negocio);
    }
    catch (error) {
        return res.status(500).json(error);
    }
});
exports.crearNegocio = crearNegocio;
const MostrarNegocios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const negocios = yield Negocio_1.default.find({}).populate({ path: 'categoria', select: 'nombre' });
        return res.status(200).json(negocios);
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.MostrarNegocios = MostrarNegocios;
const MostrarNegocioId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        const negocio = yield Negocio_1.default.findById(id).populate('productos');
        if (!negocio)
            return res.status(404).json({ message: "No hay Negocio con este Id" });
        return res.status(200).json(negocio);
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.MostrarNegocioId = MostrarNegocioId;
const actualizarNegocio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        const negocio = yield Negocio_1.default.findOneAndUpdate({ _id: id }, req.body, { new: true });
        if (!negocio)
            return res.status(404).json({ message: "No se encontro Negocio con este Id" });
        return res.status(200).json(negocio);
    }
    catch (error) {
        return res.status(500).json(error);
    }
});
exports.actualizarNegocio = actualizarNegocio;
const eliminarNegocio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const negocio = yield Negocio_1.default.findByIdAndDelete(req.params.id);
        if (!negocio)
            return res.status(404).json({ message: "No se encontro negocio con este Id" });
        const categorias = yield Categoria_1.default.findOne({ _id: negocio.categoria });
        console.log(categorias);
        categorias === null || categorias === void 0 ? void 0 : categorias.negocios.filter(neg => neg._id !== negocio.categoria);
        console.log('---', categorias);
        yield (categorias === null || categorias === void 0 ? void 0 : categorias.save());
        return res.status(200).json(negocio);
    }
    catch (error) {
        return res.status(500).json(error);
    }
});
exports.eliminarNegocio = eliminarNegocio;
//# sourceMappingURL=negocio.controller.js.map