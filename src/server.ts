import express from 'express'; 

const app = express();

app.get('/pong', (req, res) => {
    return res.json({ pong: "ping" });
});

app.listen(5000, ()=> {
    console.log('Server Started!');
});