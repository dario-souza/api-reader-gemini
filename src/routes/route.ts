import { Router } from 'express'
import { getExample, getExample2, getExample3 } from '../controllers/getExample'

const routes = Router()

routes.get('/example', getExample)
routes.get('/example2', getExample2)
routes.get('/example3', getExample3)

export default routes