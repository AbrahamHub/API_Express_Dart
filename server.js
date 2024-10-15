const express = require('express');
const productRoutes = require('./src/routes/productRoutes');

const app = express();
const port = 80;

app.use(express.json()); 
app.use('/products', productRoutes);

app.listen(port, () => {
  console.log(`API corriendo en el puerto http://a.com:${port}`);
});
