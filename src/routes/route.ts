import { Router } from 'express'
import { getExample, getExample2 } from '../controllers/getExample'

const routes = Router()

routes.get('/example', getExample)
routes.get('/example2', getExample2)

export default routes