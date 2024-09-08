"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexController = void 0;
class IndexController {
    indexEmpleado(req, res) {
        res.json({ text: 'puedes acceder a /app/empleados' });
    }
    indexFactura(req, res) {
        res.json({ text: 'puedes acceder a /app/facturas' });
    }
    indexProducto(req, res) {
        res.json({ text: 'puedes acceder a /app/productos' });
    }
    indexProveedor(req, res) {
        res.json({ text: 'puedes acceder a /app/proveedores' });
    }
    indexRecargas(req, res) {
        res.json({ text: 'puedes acceder a /app/recargas' });
    }
}
exports.indexController = new IndexController();
