import { Request, Response } from 'express'

export const meterConfirmController = async (req: Request, res: Response) => {
  res.json({ message: 'Meter confirm' })
}
