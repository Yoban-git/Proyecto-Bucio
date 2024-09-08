import { Request, Response, text } from "express";
import pool from "../database";

class ProductoController{
    public async lista(req: Request, res: Response){
        console.log(req.body);
        const producto = await pool.query('select * from producto');
        res.json(producto);
    }
    public async crear(req: Request, res: Response){
        console.log(req.body);
        await pool.query('insert into producto set ?', [req.body]);
        res.json({message: 'se acaba de andar un producto'});
    }
    public async actualizar(req: Request, res: Response){
        const {codigo} = req.params;
        await pool.query('update producto set ? where codigo =?', [req.body,codigo]);
        res.json({message: 'se actualizo un producto'});
    }
    public async borrar(req: Request, res: Response){
        const {codigo} = req.params;
        await pool.query('delete from producto where codigo =?',[codigo]);
        res.json({message: 'dejo de exitir un producto'});
    }
    public async buscar(req: Request, res: Response){
        const {codigo} = req.params;
        const producto = await pool.query('select * from producto where codigo =?', [codigo])
        if(producto.lengh > 0){
            return res.json(producto[0]);
        }
        res.status(404).json({message: 'No existe el producto'});
    }
}

const productoController = new ProductoController(); //devuelve objeto de la clase controller
export default productoController;//importacion de instancia