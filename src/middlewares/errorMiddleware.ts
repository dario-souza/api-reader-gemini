import { NextFunction, Request, Response } from "express";
import { ErrorMeasure } from "../errors/error";

export const errorMiddleware = (
  err: unknown, req: Request, res: Response, next: NextFunction
) => {
  if (err instanceof ErrorMeasure) {
    res.status(400).json(err.respError())
  } else {
    res.status(500).json({
      error_code: 'INTERNAL SERVER ERROR',
      error_description: 'An unexpected error occurred'
    })
  }
}