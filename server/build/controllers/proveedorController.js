"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class ProveedorController {
    lista(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            const producto = yield database_1.default.query('select * from proveedor');
            res.json(producto);
        });
    }
    crear(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            yield database_1.default.query('insert into proveedor set ?', [req.body]);
            res.json({ message: 'se acaba de generar a un nuevo proveedor' });
        });
    }
    actualizar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //llave primaria
            const { nombre } = req.params;
            yield database_1.default.query('update proveedor set ? where nombre =?', [req.body, nombre]);
            res.json({ message: 'se actualizo al proveedor' });
        });
    }
    borrar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nombre } = req.params;
            yield database_1.default.query('delete from proveedor where nombre =?', [nombre]);
            res.json({ message: 'acabas de eliminar al proveedor' });
        });
    }
    buscar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nombre } = req.params;
            const proveedor = yield database_1.default.query('select * from proveedor where nombre =?', [nombre]);
            if (proveedor.lengh > 0) {
                return res.json(proveedor[0]);
            }
            res.status(404).json({ message: 'No cuentas con este proveedor proveedor' });
        });
    }
}
const proveedorController = new ProveedorController(); //devuelve objeto de la clase controller
exports.default = proveedorController; //importacion de instancia
