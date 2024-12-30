import { Request, Response } from 'express'

export const meterList = (req: Request, res: Response) => {
  const { customercode } = req.params
  res.json({ message: 'Meter list', customercode })
}
