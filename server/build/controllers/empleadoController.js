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
class EmpleadoController {
    lista(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            const producto = yield database_1.default.query('select * from empleado');
            res.json(producto);
        });
    }
    crear(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            yield database_1.default.query('insert into empleado set ?', [req.body]);
            res.json({ message: 'se acaba de mandar un empleado' });
        });
    }
    actualizar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //llave primaria
            const { rfc } = req.params;
            yield database_1.default.query('update empleado set ? where rfc =?', [req.body, rfc]);
            res.json({ message: 'se actualizo un empleado' });
        });
    }
    borrar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { rfc } = req.params;
            yield database_1.default.query('delete from empleado where rfc =?', [rfc]);
            res.json({ message: 'dejo de exitir un empleado' });
        });
    }
    buscar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { rfc } = req.params;
            const empleado = yield database_1.default.query('select * from empleado where rfc =?', [rfc]);
            if (empleado.lengh > 0) {
                return res.json(empleado[0]);
            }
            res.status(404).json({ message: 'No existe el empleado' });
        });
    }
}
const empleadoController = new EmpleadoController(); //devuelve objeto de la clase controller
exports.default = empleadoController; //importacion de instancia
