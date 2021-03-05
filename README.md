# js-error-logger

Javascript error logger for browser

## Install

```
npm install @timeone-group/js-error-logger
```

## Use

```javascript
import { Logger, AppError, Severity } from '@timeone-group/js-error-logger';

try {
    throw new AppError(Severity.ERROR, 'Mon erreur');
} catch (e) {
    Logger.catch(e);
}
```