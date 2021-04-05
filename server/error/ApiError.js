class ApiError extends Error {
  constructor(status, message, errors = null) {
    super();
    this.status = status;
    this.message = message;
    if (errors) this.errors = errors;
  }

  static badRequest(message) {
    return new ApiError(404, message);
  }

  static badRequestWithErrors(message, errors) {
    return new ApiError(404, message, errors);
  }

  static internal(message) {
    return new ApiError(500, message);
  }

  static forbidden(message) {
    return new ApiError(403, message);
  }

  static custom(status, message) {
    return new ApiError(status, message);
  }
}

module.exports = ApiError;
