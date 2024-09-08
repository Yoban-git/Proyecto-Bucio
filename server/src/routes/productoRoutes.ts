import { Router, request } from "express";
import productoController from "../controllers/productoController";

class ProductoRoutes{
    public router: Router = Router();

    //metodo contructos
    constructor(){
        this.config();
    }
    //metodo config
    config(): void{
        this.router.get('/',productoController.lista);
        this.router.post('/',productoController.crear);
        this.router.put('/:codigo',productoController.actualizar);
        this.router.delete('/:codigo',productoController.borrar);
        this.router.get('/:codigo',productoController.buscar);
    }
}

const productoRoutes = new ProductoRoutes();
export default productoRoutes.router;