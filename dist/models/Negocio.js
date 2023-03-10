"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const SchemaNegocio = new mongoose_1.Schema({
    nombre: {
        type: String,
        required: true,
        unique: true,
        min: 3
    },
    imagen: {
        type: String,
    },
    descripcion: {
        type: String
    },
    rating: {
        type: Number,
        default: 3.0
    },
    direccion: {
        type: String,
        required: true
    },
    num_domicilios: {
        type: Number,
        required: true,
        default: 1
    },
    telefono: {
        type: String,
    },
    tiempo_entrega: {
        type: String,
        required: true,
        default: '20 min'
    },
    oferta: {
        type: Boolean,
        default: false
    },
    abierto: {
        type: Boolean,
        default: false
    },
    latitude: {
        type: Number,
        default: 6.5
    },
    longitude: {
        type: Number,
        default: -75.732
    },
    categoria: {
        type: mongoose_1.Types.ObjectId,
        ref: 'Categoria'
    },
    servicios: [{
            type: String,
        }
    ],
    productos: [
        {
            type: mongoose_1.Types.ObjectId,
            ref: 'Producto'
        }
    ]
}, {
    versionKey: false
});
exports.default = (0, mongoose_1.model)('Negocio', SchemaNegocio);
//# sourceMappingURL=Negocio.js.map