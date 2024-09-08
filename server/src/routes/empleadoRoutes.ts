import { Router, request } from "express";
import empleadoController from "../controllers/empleadoController";

class EmpleadoRoutes{
    public router: Router = Router();

    //metodo contructos
    constructor(){
        this.config();
    }
    //metodo config
    config(): void{
        this.router.get('/',empleadoController.lista);
        this.router.post('/',empleadoController.crear);
        this.router.put('/:rfc',empleadoController.actualizar);
        this.router.delete('/:rfc',empleadoController.borrar);
        this.router.get('/:rfc',empleadoController.buscar);
    }
}

const empleadoRoutes = new EmpleadoRoutes();
export default empleadoRoutes.router;