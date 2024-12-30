import express from 'express'
import routes from './routes/route';

const app = express()
app.use(express.json())
app.use('/api', routes)
const PORT = 4500;

app.listen(PORT, () => console.log(`App is running in port ${PORT}`))