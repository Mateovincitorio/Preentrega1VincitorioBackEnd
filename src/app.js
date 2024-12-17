import express from 'express'
import productsRoutes from './routes/products.routes.js';
import cartRoutes from './routes/carts.routes.js';
import exp from 'constants';

const app = express();
const PORT = 8080;
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/api/products', productsRoutes);
app.use('/api/carts', cartRoutes);
app.use(express.static('public'))

app.listen(PORT,()=>{
    console.log(`escuchando en el puerto ${PORT}`);
    
})