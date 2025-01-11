import { Request, Response } from 'express'
import { MeterType } from '../types/meter.type'
import { processImageMeterService } from '../services/process.image.service'
import { ErrorMeasureUpload } from '../errors/error'


export const meterImageController = async (req: Request<{}, {}, MeterType>, res: Response) => {
  const payload = req.body
  try {
    const response = await processImageMeterService(payload)
    res.status(200).json({ result: response })
  } catch (error: unknown) {
    if (error instanceof ErrorMeasureUpload) {
      res.status(403).json({ error_code: error.error_code, error_description: error.error_description })
    }
  }

}
