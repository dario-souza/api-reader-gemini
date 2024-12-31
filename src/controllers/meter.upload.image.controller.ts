import { Request, Response } from 'express'
import { MeterType } from '../types/meter.type'
import { processImageMeterService } from '../services/process.image.service'


export const meterImageController = async (req: Request<{}, {}, MeterType>, res: Response) => {
  const payload = req.body
  try {
    const response = await processImageMeterService(payload)
    res.status(200).json({ result: response })
  } catch (error: unknown) {
    res.status(400).json({ message: error })
  }

}
