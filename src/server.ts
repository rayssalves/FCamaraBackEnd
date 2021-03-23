import express from 'express'; 
import routes from './routes';

const app = express();

app.use(routes);

app.listen(5000, ()=> {
    console.log('Server Started!');
});