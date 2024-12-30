import { Request, Response } from 'express'

export const getExample = (req: Request, res: Response) => {
  res.json({ message: 'Is route is working' })
}
export const getExample2 = (req: Request, res: Response) => {
  res.json({ message: 'Is route is working 2' })
}