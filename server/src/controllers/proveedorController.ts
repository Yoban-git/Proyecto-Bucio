import { Request, Response, text } from "express";
import pool from "../database";

class ProveedorController{
    public async lista(req: Request, res: Response){
        console.log(req.body);
        const producto = await pool.query('select * from proveedor');
        res.json(producto);
    }
    public async crear(req: Request, res: Response){
        console.log(req.body);
        await pool.query('insert into proveedor set ?', [req.body]);
        res.json({message: 'se acaba de generar a un nuevo proveedor'});
    }
    public async actualizar(req: Request, res: Response){
        //llave primaria
        const {nombre} = req.params;
        await pool.query('update proveedor set ? where nombre =?', [req.body,nombre]);
        res.json({message: 'se actualizo al proveedor'});
    }
    public async borrar(req: Request, res: Response){
        const {nombre} = req.params;
        await pool.query('delete from proveedor where nombre =?',[nombre]);
        res.json({message: 'acabas de eliminar al proveedor'});
    }
    public async buscar(req: Request, res: Response){
        const {nombre} = req.params;
        const proveedor = await pool.query('select * from proveedor where nombre =?', [nombre])
        if(proveedor.lengh > 0){
            return res.json(proveedor[0]);
        }
        res.status(404).json({message: 'No cuentas con este proveedor proveedor'});
    }
}

const proveedorController = new ProveedorController(); //devuelve objeto de la clase controller
export default proveedorController;//importacion de instancia