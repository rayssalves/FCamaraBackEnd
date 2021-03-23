import { Router } from 'express';

const routes =  Router();

routes.get('/pong', (req, res) => {
    return res.json({ pong: "ping" });
});

export default routes;

