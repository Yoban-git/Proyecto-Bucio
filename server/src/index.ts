import express, { Application} from "express";
import indexRoutes from "./routes/indexRoutes";
import empleadoRoutes from "./routes/empleadoRoutes";
import facturaRoutes from "./routes/facturaRoutes";
import productoRoutes from "./routes/productoRoutes";
import proveedorRoutes from "./routes/proveedorRoutes";
import recargasRoutes from "./routes/recargasRoutes";

import morgan from "morgan";
import cors from "cors";
class Server{
    public app: Application;
    
    constructor(){
        this.app = express();
        this.config();
        this.rutas();
    }

    config(): void{
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }

    rutas(): void{
        this.app.use(indexRoutes);
        this.app.use('app/empleados', empleadoRoutes);
        this.app.use('app/facturas', facturaRoutes);
        this.app.use('app/productos', productoRoutes);
        this.app.use('app/proveedores', proveedorRoutes);
        this.app.use('app/recargass', recargasRoutes);
    }

    start(){
        this.app.listen(this.app.get('port'), () => {
            console.log('servidor en puerto', this.app.get('port'));
        });
    }
        
}

const server = new Server();
server.start();