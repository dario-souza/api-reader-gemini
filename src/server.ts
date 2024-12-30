import express from 'express'

const app = express()
const PORT = 4500;
app.use(express.json())

app.listen(PORT, () => console.log(`App is running in port ${PORT}`))