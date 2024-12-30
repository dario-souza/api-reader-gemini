import express from 'express'
import routes from './routes/route';

const app = express()
app.use(routes)
const PORT = 4500;
app.use(express.json())

app.listen(PORT, () => console.log(`App is running in port ${PORT}`))