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
class FacturaController {
    lista(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            const producto = yield database_1.default.query('select * from factura');
            res.json(producto);
        });
    }
    crear(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            yield database_1.default.query('insert into factura set ?', [req.body]);
            res.json({ message: 'se acaba de generar una factura' });
        });
    }
    actualizar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //llave primaria
            const { folio } = req.params;
            yield database_1.default.query('update factura set ? where folio =?', [req.body, folio]);
            res.json({ message: 'se actualizo una factura' });
        });
    }
    borrar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { folio } = req.params;
            yield database_1.default.query('delete from factura where folio =?', [folio]);
            res.json({ message: 'se elimino una factura' });
        });
    }
    buscar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { folio } = req.params;
            const factura = yield database_1.default.query('select * from factura where folio =?', [folio]);
            if (factura.lengh > 0) {
                return res.json(factura[0]);
            }
            res.status(404).json({ message: 'No existe la factura' });
        });
    }
}
const facturaController = new FacturaController(); //devuelve objeto de la clase controller
exports.default = facturaController; //importacion de instancia
