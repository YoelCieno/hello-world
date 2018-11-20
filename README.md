# Angular CRUD Hello World App with NgRx Store and NgRx Effects
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)


This application uses [@ngrx/store](https://github.com/ngrx/platform/blob/master/docs/store/README.md) to manage application state, and [@ngrx/effects](https://github.com/ngrx/platform/blob/master/docs/effects/README.md) to manange side effects, It also uses ngrx 4 fractal state management to leverage lazy loading of reducers and effects.

### New:
[@ngrx/entity](https://github.com/ngrx/platform/tree/master/docs/entity) is released and available on NPM, @ngrx/entity helps to reduce boilerplate and [manipulate data](https://i.imgur.com/2IGdFRB.jpg) in a fast and easy fashion, you can find @ngrx/entity implementation in Users Reducer.

## Get started 
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.1

## Development server
This project try to use a websockets service. Therefore, if you don´t want console errors: you have to create or download and execute on terminal `node index.js` with this [simple-socket](https://github.com/YoelCieno/simple-socket).

Run `ng serve` (or `yarn start` if you use **yarn**) for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding
Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests
Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help
To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

### To do:
- ~~There is a bug to create and update the API (we send the call but the final state jump to a bug)~~
- Improve the styles (For the moment there are some poor)
- Test with Karma and Jasmine
