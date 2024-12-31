import { Router } from 'express'
import { meterImageController } from '../controllers/meter.upload.image.controller'
import { meterConfirmController } from '../controllers/meter.confirm.controller'
import { meterListController } from '../controllers/meter.list.controller'


const routes = Router()

routes.post('/upload', meterImageController)
routes.patch('/confirm', meterConfirmController)
routes.get('/:customercode/list', meterListController)


export default routes