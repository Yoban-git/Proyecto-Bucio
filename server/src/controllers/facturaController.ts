import { Request, Response, text } from "express";
import pool from "../database";

class FacturaController{
    public async lista(req: Request, res: Response){
        console.log(req.body);
        const producto = await pool.query('select * from factura');
        res.json(producto);
    }
    public async crear(req: Request, res: Response){
        console.log(req.body);
        await pool.query('insert into factura set ?', [req.body]);
        res.json({message: 'se acaba de generar una factura'});
    }
    public async actualizar(req: Request, res: Response){
        //llave primaria
        const {folio} = req.params;
        await pool.query('update factura set ? where folio =?', [req.body,folio]);
        res.json({message: 'se actualizo una factura'});
    }
    public async borrar(req: Request, res: Response){
        const {folio} = req.params;
        await pool.query('delete from factura where folio =?',[folio]);
        res.json({message: 'se elimino una factura'});
    }
    public async buscar(req: Request, res: Response){
        const {folio} = req.params;
        const factura = await pool.query('select * from factura where folio =?', [folio])
        if(factura.lengh > 0){
            return res.json(factura[0]);
        }
        res.status(404).json({message: 'No existe la factura'});
    }
}

const facturaController = new FacturaController(); //devuelve objeto de la clase controller
export default facturaController;//importacion de instancia