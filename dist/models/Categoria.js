"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const SchemaCategoria = new mongoose_1.Schema({
    nombre: {
        type: String,
        required: true,
        unique: true
    },
    imagen: {
        type: String,
        required: true
    },
    negocios: [{
            type: mongoose_1.Types.ObjectId,
            ref: 'Negocio'
        }]
}, {
    versionKey: false
});
exports.default = (0, mongoose_1.model)('Categoria', SchemaCategoria);
//# sourceMappingURL=Categoria.js.map