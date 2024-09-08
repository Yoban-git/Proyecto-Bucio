"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const empleadoRoutes_1 = __importDefault(require("./routes/empleadoRoutes"));
const facturaRoutes_1 = __importDefault(require("./routes/facturaRoutes"));
const productoRoutes_1 = __importDefault(require("./routes/productoRoutes"));
const proveedorRoutes_1 = __importDefault(require("./routes/proveedorRoutes"));
const recargasRoutes_1 = __importDefault(require("./routes/recargasRoutes"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.rutas();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    rutas() {
        this.app.use(indexRoutes_1.default);
        this.app.use('app/empleados', empleadoRoutes_1.default);
        this.app.use('app/facturas', facturaRoutes_1.default);
        this.app.use('app/productos', productoRoutes_1.default);
        this.app.use('app/proveedores', proveedorRoutes_1.default);
        this.app.use('app/recargass', recargasRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('servidor en puerto', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
