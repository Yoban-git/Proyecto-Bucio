"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const facturaController_1 = __importDefault(require("../controllers/facturaController"));
class FacturaRoutes {
    //metodo contructos
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    //metodo config
    config() {
        this.router.get('/', facturaController_1.default.lista);
        this.router.post('/', facturaController_1.default.crear);
        this.router.put('/:folio', facturaController_1.default.actualizar);
        this.router.delete('/:folio', facturaController_1.default.borrar);
        this.router.get('/:folio', facturaController_1.default.buscar);
    }
}
const facturasRoutes = new FacturaRoutes();
exports.default = facturasRoutes.router;
