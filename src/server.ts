import express from 'express'; 
import routes from './routes';
// nao tenho certeza, avaliar
import "reflect-metadata";

const app = express();

app.use(routes);

app.listen(5000, ()=> {
    console.log('Server Started!');
});
