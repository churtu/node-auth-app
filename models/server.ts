import express, {Application} from 'express';
import { authRouter } from '../routes';

export class Server {
    private app : Application;
    private port: string;

    constructor(){
        this.app = express();
        this.port = process.env.PORT || '8000';

        this.middlewares();
        this.routes();
    };

    middlewares(){
        this.app.use(express.urlencoded({extended:true}));
    }

    routes(){
        this.app.use('/', authRouter);
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Server on port ${this.port}`);
        });
    }
}