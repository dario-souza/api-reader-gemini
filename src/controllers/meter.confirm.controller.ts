import { Request, Response } from 'express'

export const meterConfirm = (req: Request, res: Response) => {
  res.json({ message: 'Meter confirm' })
}
