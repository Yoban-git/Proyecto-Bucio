import { Router, request } from "express";
import { indexController } from "../controllers/indexController";

class IndexRoutes{
    public router: Router = Router();

    //metodo contructos
    constructor(){
        this.config();
    }
    //metodo config
    config(): void{
        this.router.get('/',indexController.indexEmpleado);//ruta inicial del indexController
        this.router.get('/',indexController.indexFactura);
        this.router.get('/',indexController.indexProducto);
        this.router.get('/',indexController.indexProveedor);
        this.router.get('/',indexController.indexRecargas);
    }
}

const indexRoutes = new IndexRoutes();
export default indexRoutes.router;