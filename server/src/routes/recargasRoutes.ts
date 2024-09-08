import { Router, request } from "express";
import recargasController
 from "../controllers/recargasController";
class RecargasRoutes{
    public router: Router = Router();

    //metodo contructos
    constructor(){
        this.config();
    }
    //metodo config
    config(): void{
        this.router.get('/',recargasController.lista);
        this.router.post('/',recargasController.crear);
        this.router.put('/:compania',recargasController.actualizar);
        this.router.delete('/:compania',recargasController.borrar);
        this.router.get('/:compania',recargasController.buscar);
    }
}

const recargasRoutes = new RecargasRoutes();
export default recargasRoutes.router;