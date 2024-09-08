"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const recargasController_1 = __importDefault(require("../controllers/recargasController"));
class RecargasRoutes {
    //metodo contructos
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    //metodo config
    config() {
        this.router.get('/', recargasController_1.default.lista);
        this.router.post('/', recargasController_1.default.crear);
        this.router.put('/:compania', recargasController_1.default.actualizar);
        this.router.delete('/:compania', recargasController_1.default.borrar);
        this.router.get('/:compania', recargasController_1.default.buscar);
    }
}
const recargasRoutes = new RecargasRoutes();
exports.default = recargasRoutes.router;
