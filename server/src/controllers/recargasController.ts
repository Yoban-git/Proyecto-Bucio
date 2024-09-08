import { Request, Response, text } from "express";
import pool from "../database";

class RecargasController{
    public async lista(req: Request, res: Response){
        console.log(req.body);
        const recargas = await pool.query('select * from recargas');
        res.json(recargas);
    }
    public async crear(req: Request, res: Response){
        console.log(req.body);
        await pool.query('insert into recargas set ?', [req.body]);
        res.json({message: 'se realizo una recargar exitosa'});
    }
    public async actualizar(req: Request, res: Response){
        //llave primaria
        const {compania} = req.params;
        await pool.query('update recargas set ? where compania =?', [req.body,compania]);
        res.json({message: 'se actualizo la recarga'});
    }
    public async borrar(req: Request, res: Response){
        const {compania} = req.params;
        await pool.query('delete from recargas where compania =?',[compania]);
        res.json({message: 'se elimino la recarga'});
    }
    public async buscar(req: Request, res: Response){
        const {compania} = req.params;
        const recargas = await pool.query('select * from recargas where compania =?', [compania])
        if(recargas.lengh > 0){
            return res.json(recargas[0]);
        }
        res.status(404).json({message: 'recarga no realizada'});
    }
}

const recargasController = new RecargasController(); //devuelve objeto de la clase controller
export default recargasController;//importacion de instancia