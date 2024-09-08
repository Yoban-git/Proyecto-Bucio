import { Router, request } from "express";
import facturaController from "../controllers/facturaController";

class FacturaRoutes{
    public router: Router = Router();

    //metodo contructos
    constructor(){
        this.config();
    }
    //metodo config
    config(): void{
        this.router.get('/',facturaController.lista);
        this.router.post('/',facturaController.crear);
        this.router.put('/:folio',facturaController.actualizar);
        this.router.delete('/:folio',facturaController.borrar);
        this.router.get('/:folio',facturaController.buscar);
    }
}

const facturasRoutes = new FacturaRoutes();
export default facturasRoutes.router;