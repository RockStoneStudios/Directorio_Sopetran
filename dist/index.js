"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const connection_1 = __importDefault(require("./db/connection"));
const negocios_routes_1 = __importDefault(require("./routes/negocios.routes"));
const productos_routes_1 = __importDefault(require("./routes/productos.routes"));
const categorias_routes_1 = __importDefault(require("./routes/categorias.routes"));
const cors_1 = __importDefault(require("cors"));
class Server {
    constructor() {
        this.path = {
            negocio: '/negocios',
            producto: '/productos',
            categoria: '/categorias'
        };
        dotenv_1.default.config();
        this.app = (0, express_1.default)();
        this.port = parseInt(process.env.PORT);
        this.middlewares();
        this.databaseInithializacion();
        this.routes();
        this.listen();
    }
    middlewares() {
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Starting Port on Port --> ' + this.port);
        });
    }
    databaseInithializacion() {
        connection_1.default;
    }
    routes() {
        this.app.use(this.path.categoria, categorias_routes_1.default);
        this.app.use(this.path.negocio, negocios_routes_1.default);
        this.app.use(this.path.producto, productos_routes_1.default);
    }
}
new Server();
//# sourceMappingURL=index.js.map