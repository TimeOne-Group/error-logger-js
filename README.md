# error-logger-js

Javascript error logger for browser

## Install

```
npm install @timeone-group/error-logger-js
```

## Use

```javascript
import { Logger, AppError, Severity } from '@timeone-group/error-logger-js';

try {
    throw new AppError(Severity.ERROR, 'Mon erreur');
} catch (e) {
    Logger.catchError(e);
}
```