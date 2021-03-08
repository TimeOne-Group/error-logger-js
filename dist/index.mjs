
/*! @timeone-group/error-logger-js 0.2.3 https://github.com/https://github.com/TimeOne-Group/error-logger-js#readme @license GPL-3.0 */
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

var Severity = {
  ERROR: 1,
  WARNING: 2,
};

/* eslint no-console: ["error", { allow: ["warn", "error"] }] */

const Logger = {
  catchError: (error, prefix = 'Logger') => {
    if (error instanceof AppError) {
      switch (error.severity) {
        case Severity.WARNING:
          console.warn(`[${prefix}] WARNING ${error.message}`);
          break;
        case Severity.ERROR:
        default:
          console.error(`[${prefix}] ERROR ${error.message}`);
          break;
      }
    } else if (error instanceof Error) {
      console.error(`[${prefix}] ERROR(js-core) ${error.message}`);
    } else {
      console.error(`[${prefix}] ERROR Unabled to treat error`, error);
    }
  },
};

export { AppError, Logger, Severity };
