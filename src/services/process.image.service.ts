import { apiGeminiProcessImage } from "../repositories/api/api.gemini.process.image";
import { MeterType } from "../types/meter.type";

export const processImageMeterService = async (payload: MeterType) => {
  // const { image, measure_type } = payload

  // if (!image || !['GAS', 'WATER'].includes(measure_type)) {
  //   throw new Error('Invalid payload')
  // }

  const geminiResponse = await apiGeminiProcessImage(payload)
  return geminiResponse
}