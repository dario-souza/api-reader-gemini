import { NextFunction, Request, Response } from 'express'
import { MeterType } from '../types/meter.type'
import { processImageMeterService } from '../services/process.image.service'



export const meterImageController = async (
  req: Request<{}, {}, MeterType>,
  res: Response,
  next: NextFunction
) => {
  const payload = req.body
  try {
    const response = await processImageMeterService(payload)
    res.status(200).json(response)
  } catch (error: unknown) {
    next(error)
  }
}
