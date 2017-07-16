# Welcome to experimetnal demos!

This is a collection of demos related (but not only) to Angular.


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.0.

# Service related demos
## Blocking service with observables
This demo tries to demonstrate how can various observables evaluted strictly in a linear order.

This can be useful for example to not to allow a second Http request until the first arrives back (or even fails)

Actual solution uses a simple boolean flag to operate as a binary semaphore.

`Note:` Open console to see results

## Shared data between multiple browser tabs

This demo show how can sync a model between multiple tabs of a single browser through local storage.
### TODO
		

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
