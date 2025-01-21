import { Measures } from "../../models/measure";
import { MeterResponseIA } from "../../types/meter.type";

export async function saveMeasurements(response: MeterResponseIA) {
  const measure = new Measures(response)
  try {
    await measure.save()
  } catch (error) {
    console.log(error)
  }

}