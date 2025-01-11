export class ErrorMeasureUpload extends Error {
  error_code: string
  error_description: string
  constructor(errorCode: string, errorDescription: string) {
    super()
    this.error_code = errorCode
    this.error_description = errorDescription
  }
}

