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
class RecargasController {
    lista(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            const recargas = yield database_1.default.query('select * from recargas');
            res.json(recargas);
        });
    }
    crear(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            yield database_1.default.query('insert into recargas set ?', [req.body]);
            res.json({ message: 'se realizo una recargar exitosa' });
        });
    }
    actualizar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //llave primaria
            const { compania } = req.params;
            yield database_1.default.query('update recargas set ? where compania =?', [req.body, compania]);
            res.json({ message: 'se actualizo la recarga' });
        });
    }
    borrar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { compania } = req.params;
            yield database_1.default.query('delete from recargas where compania =?', [compania]);
            res.json({ message: 'se elimino la recarga' });
        });
    }
    buscar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { compania } = req.params;
            const recargas = yield database_1.default.query('select * from recargas where compania =?', [compania]);
            if (recargas.lengh > 0) {
                return res.json(recargas[0]);
            }
            res.status(404).json({ message: 'recarga no realizada' });
        });
    }
}
const recargasController = new RecargasController(); //devuelve objeto de la clase controller
exports.default = recargasController; //importacion de instancia
