import express from 'express';
import bodyParser from 'body-parser';

import orderRoutes from './routes/order.route';
import mealRoutes from './routes/meal.route';

const app = express();

const PORT = 3000;
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Server setup is fine'));

app.use('/api/v1/orders', orderRoutes);
app.use('/api/v1/meals', mealRoutes);

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
