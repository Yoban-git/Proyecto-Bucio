"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const empleadoController_1 = __importDefault(require("../controllers/empleadoController"));
class EmpleadoRoutes {
    //metodo contructos
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    //metodo config
    config() {
        this.router.get('/', empleadoController_1.default.lista);
        this.router.post('/', empleadoController_1.default.crear);
        this.router.put('/:rfc', empleadoController_1.default.actualizar);
        this.router.delete('/:rfc', empleadoController_1.default.borrar);
        this.router.get('/:rfc', empleadoController_1.default.buscar);
    }
}
const empleadoRoutes = new EmpleadoRoutes();
exports.default = empleadoRoutes.router;
