import express , {Application} from 'express';
import config from './config';
import DB  from './db/connection';
import negocioRouter from './routes/negocios.routes';
import productoRouter from './routes/productos.routes';
import categoriaRouter from './routes/categorias.routes';
import cors from 'cors';
class Server {
    private app : Application;
    private port : number;
    private path = {
        negocio : '/negocios',
        producto : '/productos',
        categoria : '/categorias'

    }

    constructor(){
        this.app = express();
        this.port = parseInt(<string>config.PORT);
        this.middlewares();
        this.databaseInithializacion();
        this.routes();
        this.listen();
    }
    
     public middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended : false}));
     }
    public listen () {
        this.app.listen(this.port,()=>{
            console.log('Starting Port on Port --> '+this.port);
        })
    }
    
    public databaseInithializacion () {
       DB;
    }

    public routes () {
        this.app.use(this.path.categoria,categoriaRouter);
        this.app.use(this.path.negocio,negocioRouter);
        this.app.use(this.path.producto,productoRouter);
    }
}



new Server();
