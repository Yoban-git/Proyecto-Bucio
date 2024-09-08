"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const proveedorController_1 = __importDefault(require("../controllers/proveedorController"));
class ProveedorRoutes {
    //metodo contructos
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    //metodo config
    config() {
        this.router.get('/', proveedorController_1.default.lista);
        this.router.post('/', proveedorController_1.default.crear);
        this.router.put('/:nombre', proveedorController_1.default.actualizar);
        this.router.delete('/:nombre', proveedorController_1.default.borrar);
        this.router.get('/:nombre', proveedorController_1.default.buscar);
    }
}
const proveedorRoutes = new ProveedorRoutes();
exports.default = proveedorRoutes.router;
