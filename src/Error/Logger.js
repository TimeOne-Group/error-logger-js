/* eslint no-console: ["error", { allow: ["warn", "error"] }] */
import AppError from './AppError';
import Severity from './Severity';

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

export default Logger;
