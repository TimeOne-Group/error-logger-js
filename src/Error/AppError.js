class AppError extends Error {
  /**
   * AppError Constructor
   * @param {integer} severity
   * @param  {...any} params
   */
  constructor(severity, ...params) {
    super(...params);
    this.severity = severity;
  }
}

export default AppError;
