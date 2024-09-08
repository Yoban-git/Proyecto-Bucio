"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const indexController_1 = require("../controllers/indexController");
class IndexRoutes {
    //metodo contructos
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    //metodo config
    config() {
        this.router.get('/', indexController_1.indexController.indexEmpleado); //ruta inicial del indexController
        this.router.get('/', indexController_1.indexController.indexFactura);
        this.router.get('/', indexController_1.indexController.indexProducto);
        this.router.get('/', indexController_1.indexController.indexProveedor);
        this.router.get('/', indexController_1.indexController.indexRecargas);
    }
}
const indexRoutes = new IndexRoutes();
exports.default = indexRoutes.router;
