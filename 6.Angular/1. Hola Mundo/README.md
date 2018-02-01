# Holamundo

## Descripción de directorios

* [e2e] Archivo para realizar pruebas unitarias a la aplicación
* .angular-cli.json: archivo de configuración propio del cli (aquí se pueden hacer algunas configuraciones de bootstrap, ubicación de algunos archivos del proyecto..)
* .gitignore: donde estan todos los archivos que no se deben subir a github.
* karma.conf.js: utilizado para realizar pruebas unitarias.
* package.json: en caso de que se tenga que reconstruir el proyecto, con este archivo se puede hacer (si se perdió el node_modules entre otros). Dependencias de desarrollo y de producción.
* protractor.conf.json: archivo de configuración para realizar pruebas.
* tsconfig.json: archivo de configuración de typescript.
* tslint.json: ayuda a que los errores se vean con un estilo apropiado.
* [src]: Contiene toda la lógica de la aplicación
  - [app] Donde está la primera pantalla que se abre cuando se inicia la app.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
