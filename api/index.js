import express from 'express';
import bodyParser from 'body-parser';
import productRoutes from './server/routes/ProductRoutes';
import orderRoutes from './server/routes/OrderRoutes';

const server = express();

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));

const port = process.env.PORT || 3000;

server.use('/api/products', productRoutes);
server.use('/api/orders', orderRoutes);

server.get('*', (req, res) => res.status(200).send({
    message: 'Esta é a API do nosso bar.'
}));

server.listen(port, () => {
    console.log(`Server is running on PORT ${port}`)
});

export default server;