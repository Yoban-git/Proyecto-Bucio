import { Request, Response, text } from "express";

class IndexController{
    public indexEmpleado(req: Request, res: Response){
        res.json({text: 'puedes acceder a /app/empleados'});
    }
    public indexFactura(req: Request, res: Response){
        res.json({text: 'puedes acceder a /app/facturas'});
    }
    public indexProducto(req: Request, res: Response){
        res.json({text: 'puedes acceder a /app/productos'});

    }
    public indexProveedor(req: Request, res: Response){
        res.json({text: 'puedes acceder a /app/proveedores'});
    }
    public indexRecargas(req: Request, res: Response){
        res.json({text: 'puedes acceder a /app/recargas'});
    }

}

export const indexController = new IndexController();