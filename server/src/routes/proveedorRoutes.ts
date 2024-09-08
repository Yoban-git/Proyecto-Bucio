import { Router, request } from "express";
import proveedorController
 from "../controllers/proveedorController";
class ProveedorRoutes{
    public router: Router = Router();

    //metodo contructos
    constructor(){
        this.config();
    }
    //metodo config
    config(): void{
        this.router.get('/',proveedorController.lista);
        this.router.post('/',proveedorController.crear);
        this.router.put('/:nombre',proveedorController.actualizar);
        this.router.delete('/:nombre',proveedorController.borrar);
        this.router.get('/:nombre',proveedorController.buscar);
    }
}

const proveedorRoutes = new ProveedorRoutes();
export default proveedorRoutes.router;