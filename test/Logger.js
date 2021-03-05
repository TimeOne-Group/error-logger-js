/* eslint-disable no-console */
import test from 'ava';
import { Logger, AppError, Severity } from '../src/index';

let error;
let errorArg;
console.error = (message, someArg) => {
  error = message;
  errorArg = someArg;
};

let warning;
console.warn = (message) => {
  warning = message;
};

test('echo error', (t) => {
  Logger.catchError(new AppError(Severity.ERROR, 'test'));
  t.is(error, '[Logger] ERROR test');
});

test('echo error default', (t) => {
  Logger.catchError(new Error('test'));
  t.is(error, '[Logger] ERROR(js-core) test');
});

test('echo warning', (t) => {
  Logger.catchError(new AppError(Severity.WARNING, 'test'));
  t.is(warning, '[Logger] WARNING test');
});

test('not error', (t) => {
  const object = { object: 'test' };
  Logger.catchError(object);
  t.is(error, '[Logger] ERROR Unabled to treat error');
  t.is(errorArg, object);
});

test('echo error custom prefix', (t) => {
  Logger.catchError(new AppError(Severity.ERROR, 'test'), 'Custom');
  t.is(error, '[Custom] ERROR test');
});

test('echo warning custom prefix', (t) => {
  Logger.catchError(new AppError(Severity.WARNING, 'test'), 'Custom');
  t.is(warning, '[Custom] WARNING test');
});
