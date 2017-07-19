# Welcome to experimetnal demos!

This is a collection of demos related (but not only) to Angular.


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.0.

# Service related demos

## Synchronous prioritized task runner
Generic task runner service to ensure tasks run only one-by-one instead of parallel.

First job will start automatically, then all following tasks will be collected until the first task finished.
Only one task will be select to run next based on a priorizer function. Remaining tasks will be rejected.

## Blocking service with observables
This demo tries to demonstrate how can various observables evaluted strictly in a linear order.

This can be useful for example to not to allow a second Http request until the first arrives back (or even fails)

Actual solution uses a simple boolean flag to operate as a binary semaphore.

`Note:` Open console to see results

## Shared data between multiple browser tabs

This demo show how can sync a model between multiple tabs of a single browser through local storage.

`Note:` Open multiple tabs since sync works beetween them.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
