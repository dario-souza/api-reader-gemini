import express from 'express'
import routes from './routes/route';

const app = express()
app.use(express.json({ limit: '4mb' }))
app.use('/api', routes)
const PORT = 4500;

app.listen(PORT, () => console.log(`App is running in port ${PORT}`))