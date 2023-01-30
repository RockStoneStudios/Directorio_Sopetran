"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const SchemaProducto = new mongoose_1.Schema({
    nombre: {
        type: String,
        required: true,
        unique: true
    },
    imagen: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    vistas: {
        type: Number,
        default: 1
    },
    calificacion: {
        type: Number,
        default: 3.0
    },
    oferta: {
        type: Boolean,
        default: false
    },
    sello: {
        type: String,
        default: 'Pruebalo'
    },
    negocio: {
        type: mongoose_1.Types.ObjectId,
        ref: 'Negocio'
    }
}, {
    versionKey: false
});
exports.default = (0, mongoose_1.model)('Producto', SchemaProducto);
//# sourceMappingURL=Producto.js.map