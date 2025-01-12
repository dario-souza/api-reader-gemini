import { ErrorMeasure } from "../errors/error";
import { apiGeminiProcessImage } from "../repositories/api/api.gemini.process.image";
import { MeterType } from "../types/meter.type";

export const processImageMeterService = async (payload: MeterType) => {
  const { image, measure_type } = payload

  if (!['GAS', 'WATER'].includes(measure_type)) {
    throw new ErrorMeasure('INVALID_DATA', 'Um dos dados foram errados')
  }
  const geminiResponse = await apiGeminiProcessImage(payload)
  return geminiResponse
}