export type MeterType = {
  image: string,
  customer_code: string,
  measure_datetime: Date,
  measure_type: 'WATER' | 'GAS'
}

export type MeterTypeConfirm = {
  measure_uuid: string,
  confirmed_value: number
}

export type MeterListTypes = {
  measure_uuid: string,
  measure_datetime: Date,
  measure_type: string,
  has_confirmed: boolean,
  image_url: string
}