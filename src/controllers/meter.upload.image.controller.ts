import { Request, Response } from 'express'

export const meterImage = (req: Request, res: Response) => {
  res.json({ message: 'Meter image' })
}
