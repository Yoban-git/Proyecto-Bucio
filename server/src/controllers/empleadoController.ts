import { Request, Response, text } from "express";
import pool from "../database";

class EmpleadoController{
    public async lista(req: Request, res: Response){
        console.log(req.body);
        const producto = await pool.query('select * from empleado');
        res.json(producto);
    }
    public async crear(req: Request, res: Response){
        console.log(req.body);
        await pool.query('insert into empleado set ?', [req.body]);
        res.json({message: 'se acaba de mandar un empleado'});
    }
    public async actualizar(req: Request, res: Response){
        //llave primaria
        const {rfc} = req.params;
        await pool.query('update empleado set ? where rfc =?', [req.body,rfc]);
        res.json({message: 'se actualizo un empleado'});
    }
    public async borrar(req: Request, res: Response){
        const {rfc} = req.params;
        await pool.query('delete from empleado where rfc =?',[rfc]);
        res.json({message: 'dejo de exitir un empleado'});
    }
    public async buscar(req: Request, res: Response){
        const {rfc} = req.params;
        const empleado = await pool.query('select * from empleado where rfc =?', [rfc])
        if(empleado.lengh > 0){
            return res.json(empleado[0]);
        }
        res.status(404).json({message: 'No existe el empleado'});
    }
}

const empleadoController = new EmpleadoController(); //devuelve objeto de la clase controller
export default empleadoController;//importacion de instancia