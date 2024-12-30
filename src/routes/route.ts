import { Router } from 'express'
import { meterImage } from '../controllers/meter.upload.image.controller'
import { meterConfirm } from '../controllers/meter.confirm.controller'
import { meterList } from '../controllers/meter.list.controller'


const routes = Router()

routes.post('/upload', meterImage)
routes.patch('/confirm', meterConfirm)
routes.get('/:customercode/list', meterList)


export default routes