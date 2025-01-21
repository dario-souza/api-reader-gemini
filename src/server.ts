import express from 'express'
import routes from './routes/route';
import { errorMiddleware } from './middlewares/error.middleware';
import { connectionMongo } from './repositories/db/mongo.config';

const app = express()
app.use(express.json({ limit: '4mb' }))
app.use('/api', routes)
app.use(errorMiddleware)
const PORT = 4500;

app.listen(PORT, async () => {
  console.log(`App is running on port ${PORT}`)
  await connectionMongo()
    .then(() => console.log('Conectado com sucesso'))
    .catch(err => console.log(`erro: ${err}`))
})