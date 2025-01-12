export class ErrorMeasure extends Error {
  private error_code: string
  private error_description: string
  constructor(errorCode: string, errorDescription: string) {
    super(errorDescription)
    this.error_code = errorCode
    this.error_description = errorDescription
  }
  respError() {
    return {
      error_code: this.error_code,
      error_description: this.error_description
    }
  }
}

