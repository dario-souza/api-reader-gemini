import { model, Schema } from "mongoose";
import { MeterResponseIA } from "../types/meter.type";

const meterGasOrWaterSchema = new Schema<MeterResponseIA>({
  image_url: { type: String, required: true },
  measure_value: { type: Number, required: true },
  measure_uuid: { type: String, required: true }
})

export const Measures = model<MeterResponseIA>('measure', meterGasOrWaterSchema)